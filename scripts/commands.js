const copy_areas = document.getElementsByClassName("i_copy");
const copy_icons = document.querySelectorAll(".i_copy i");
const copy_texts = document.getElementsByClassName("copyables");

const i_copyColorSuccess = "#1AB188";
const i_copyColorHover  = "#b1721b";
const initial = "initial";
console.log(copy_texts)
// Copiar comandos
Array.from(copy_areas).forEach((i_copy, i) => {
    i_copy.addEventListener("click", () => {
        const textToCopy = copy_texts[i].textContent;

        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);

        textarea.select();
        document.execCommand('copy');

        document.body.removeChild(textarea);
        i_copy.style.backgroundColor = i_copyColorSuccess

        toggleIconICopy(copy_icons[i], i_copy);
    });
});

function toggleIconICopy(icon, area){
    icon.classList.remove("fa-copy");
    icon.classList.add("fa-check");
    setTimeout(() => resetIconCopy(icon,area), 2000);
}
function resetIconCopy(icon, area){
    icon.classList.remove("fa-check");
    icon.classList.add("fa-copy");
    area.style.backgroundColor = initial;
}

