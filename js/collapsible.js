// https://www.w3schools.com/howto/howto_js_collapsible.asp

<style>
    .collapsible {
        cursor: pointer;
}
.content {
        display: none;
}
</style>

    <div class="collapsible">
        [技術細節]
<div class="content">
            content
</div>
    </div>


放在最後面，就不需要用
window.addEventListener('load', initLang);
<script></script>

(() => {
    const collapsible_elements = document.getElementsByClassName("collapsible");
    for (const collapsible of collapsible_elements) {
        collapsible.addEventListener("click", function () {
            console.log("test")
            var content = this.firstChild.nextElementSibling;
            // google blogger auto-inserted br workaround
            if (content instanceof HTMLBRElement)
                content = content.nextElementSibling
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
})();
