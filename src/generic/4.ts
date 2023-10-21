/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T extends object> {
  constructor(public props: T) {}
}

class Page extends Component {
  pageInfo(): void {
    console.log(this.props.title);
  }
}

export {};
