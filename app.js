const coreModelInstance = {
    version: "1.0.322",
    registry: [1311, 1195, 1044, 398, 289, 378, 154, 585],
    init: function() {
        const nodes = this.registry.filter(x => x > 338);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreModelInstance.init();
});