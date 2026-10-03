# Inside AI website

Static adaptation of Somil's pixel-perfect-replica archive design. Original template files and provenance stay in the private editorial workspace, outside this site repository.

Run `python build.py --preview` for local review including pending news. Run `python build.py` for the release build. Pending news is omitted from the release build. Approval is recorded in `content/site.json`; no automatic process may change it to approved.

The Pages workflow builds on pull requests and deploys only from main. Website updates require Somil's review before merging or pushing to main. No daily autonomous deployment is configured.

Model cards link to existing published articles. The LinkedIn newsletter link points to the existing newsletter, without creating or transferring a newsletter.
