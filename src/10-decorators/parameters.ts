import 'reflect-metadata';

function parameterDecorator(
    target: any,
    key: string,
    propertyKey: number
) {
    const items = Reflect.getMetadata('design:paramtypes', target, key);

    return items.map((item: unknown) => console.log(item));
}

class HandleParameters {
    method1(@parameterDecorator message: string) {}

    method2(@parameterDecorator value: number) {}
}

new HandleParameters();
