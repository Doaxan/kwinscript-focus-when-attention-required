if (workspace.windowList) {
    //KWin 6
    workspace.windowAdded.connect(function(win) {
        win.demandsAttentionChanged.connect(function() {
            if (win.demandsAttention) {
                workspace.activeWindow = win;
            }
        })
    });
} else {
    //KWin 5
    workspace.clientDemandsAttentionChanged.connect((client, set) => {
        if (set) {
            workspace.activeClient = client;
        }
    });
}
