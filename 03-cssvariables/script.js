const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// aarow functions doesnt work because of lexical this 
// const handleUpdate = () => {
//     const suffix = this.dataset.sizing || '';
//     document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
// }

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));