$(document).ready(function () {

        function render() {
            var val = $(".textarea").val();
            var $output = $("#renderer");

            if (!val) {
                $output.html("<em>Preview will appear here...</em>");
                return;
            }

            // Insert MathML directly
            $output.html(val);

            // Ask MathJax to typeset only this div
            if (window.MathJax) {
                MathJax.Hub.Queue(["Typeset", MathJax.Hub, "renderer"]);
            }
        }

        $(".textarea").on("input", render);
    });