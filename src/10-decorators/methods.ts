function methodDecorator(
    target: unknown,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    descriptor.value = (...args: unknown[]) => {
        return args.reverse().join(' - ');
    }
}

class HandleMessage {
    @methodDecorator
    showMessage(...message: string[]) {
        return message;
    }
}

const handleMessage = new HandleMessage();

console.log(handleMessage.showMessage(
    'Um',
    'Dois',
    'Três',
));
