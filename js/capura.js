function simulateKeyPress(key) {
    const event = new KeyboardEvent('keydown', { key });
    alert(key)
    textField.dispatchEvent(event);
} 