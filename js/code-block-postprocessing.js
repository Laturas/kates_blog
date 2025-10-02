const code_blocks = document.querySelectorAll("numbered-code-block");
code_blocks.forEach(code_block => {
    const count = code_block.children.length;
    const numbers = document.createElement('code-numberings');
    const lines = document.createElement('code-body');
    for (i = 0; i < count; i++) {
        const num = document.createElement('code-number');
        num.appendChild(document.createTextNode(i));
        numbers.append(num);

        const new_line = code_block.children[i].cloneNode(true);
        lines.append(new_line);
        lines.append(document.createElement('br'));
    }
    const new_block = document.createElement('code-block');
    new_block.append(numbers);
    new_block.append(lines);
    if (code_block.id) {
        new_block.id = code_block.id;
    }
    if (code_block.className) {
        new_block.className = code_block.className;
    }

    code_block.parentNode.replaceChild(new_block, code_block);
});