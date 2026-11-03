const projects=[...document.querySelectorAll('.project')];
const visibleProjects=projects;let activeProject=null,lastTrigger=null;
const dialog=document.getElementById('story-dialog');
const art=document.getElementById('story-art'),video=document.getElementById('story-video');
const artButton=document.getElementById('show-art'),videoButton=document.getElementById('show-video');
function showArt(){video.pause();video.hidden=true;art.hidden=false;artButton.setAttribute('aria-pressed','true');videoButton.setAttribute('aria-pressed','false');}
function renderStory(project){
  activeProject=project;showArt();const {slug,title,category,description}=project.dataset;
  art.src=`assets/${slug}-art.jpg`;art.alt=project.querySelector('img').alt;
  video.src=`assets/${slug}.mp4`;video.poster=`assets/${slug}.jpg`;video.load();
  document.getElementById('story-title').textContent=title;
  document.getElementById('story-category').textContent=`${category.toUpperCase()} / VISUAL STORY`;
  document.getElementById('story-description').textContent=description;
  document.querySelector('#story-dialog .button').href=project.dataset.instagramUrl;
  document.querySelector('#story-dialog .button').textContent='Watch the complete reel on Instagram ↗';
}
projects.forEach(project=>project.addEventListener('click',()=>{lastTrigger=project;renderStory(project);dialog.showModal();document.getElementById('close-dialog').focus();}));
document.getElementById('close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{video.pause();video.removeAttribute('src');video.load();lastTrigger?.focus();});
artButton.addEventListener('click',showArt);
videoButton.addEventListener('click',()=>{art.hidden=true;video.hidden=false;videoButton.setAttribute('aria-pressed','true');artButton.setAttribute('aria-pressed','false');video.play().catch(()=>{});});
function stepStory(direction){const index=visibleProjects.indexOf(activeProject);renderStory(visibleProjects[(index+direction+visibleProjects.length)%visibleProjects.length]);}
document.getElementById('next-story').addEventListener('click',()=>stepStory(1));
document.getElementById('prev-story').addEventListener('click',()=>stepStory(-1));
dialog.addEventListener('keydown',event=>{if(event.target===video)return;if(event.key==='ArrowRight'){event.preventDefault();stepStory(1);}if(event.key==='ArrowLeft'){event.preventDefault();stepStory(-1);}});

// Load external video players only after the visitor chooses to watch.
document.querySelectorAll('.load-youtube').forEach(button=>button.addEventListener('click',()=>{
  const frame=document.createElement('iframe');
  frame.src=`https://www.youtube-nocookie.com/embed/${encodeURIComponent(button.dataset.videoId)}?playsinline=1&rel=0`;
  frame.title=button.dataset.videoTitle;
  frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  frame.referrerPolicy='strict-origin-when-cross-origin';
  frame.allowFullscreen=true;
  button.replaceWith(frame);
}));
