document.addEventListener("alpine:init", () => {
    Alpine.data("dropdown", () => ({
        open: false,
        Toggle() {
            this.open = !this.open;
        },
    }));
    Alpine.store('currentUser' , {
        username:'S.reza',
        articles:['post1' , 'post2']
    })
});
