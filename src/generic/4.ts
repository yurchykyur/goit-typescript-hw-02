/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T extends object> {
  constructor(public props: T) {}
}

interface PageProps {
  title: string;
}
class Page extends Component<PageProps> {
  pageInfo(): void {
    console.log(this.props.title);
  }
}

export {};
