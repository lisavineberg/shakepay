Wowowwowww, is this ever a garabage solution. It "works", but I hate it.

The original plan would have been to store a "counter" for worth in the state, and then as you iterate over items in the transaction list, you update the counter. Then, for each item in the transaction list, you would just add the amount to the counter, instead of having to call the reduce function each time. But, I was unable to setState in my `calculateNetWorth` function - it was causing an infinite rendering loop. I'm sure it has to do with line 60 (the way the function is called), but I'm not quite sure how to fix it.

Had that all worked in time, I was excited to try to integrate https://developers.google.com/chart/interactive/docs/gallery/linechart to actually display a chart of worth over time. But, I got a late start (it took me 30 min to reconfigure my computer, since my npm config registry was set to my company's artifactory today after some work on Docker), and then I kept trying to fix the setState mess, so here we are.

If you'd like, you can clone the repo and run npm start, but there's not exactly much to look at.

Thanks a million for your time anyways!