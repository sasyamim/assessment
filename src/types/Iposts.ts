interface IPosts {
  posts: [
    {
      id: string;
      title: string;
      publishDate: string;
      author: {
        name: string;
        avatar: string;
      };
      summary: string;
      catagories: [
        {
          id: string;
          name: string;
        }
      ];
    }
  ];
}