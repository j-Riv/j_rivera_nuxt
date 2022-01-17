export default interface Posts {
  data: {
    entries: [
      {
        published: boolean;
        title: string;
        image: {
          path: string;
          title: string;
          mime: string;
          desciption: string;
          tags: [];
          size: number;
          image: boolean;
          video: boolean;
          audio: boolean;
          archive: boolean;
          document: boolean;
          code: boolean;
          created: number;
          modified: number;
          _by: string;
          width: number;
          height: number;
          colors: string[];
          folder: string;
          _id: string;
        };
        image_thumbnail: {
          path: string;
          title: string;
          mime: string;
          desciption: string;
          tags: [];
          size: number;
          image: boolean;
          video: boolean;
          audio: boolean;
          archive: boolean;
          document: boolean;
          code: boolean;
          created: number;
          modified: number;
          _by: string;
          width: number;
          height: number;
          colors: string[];
          folder: string;
          _id: string;
        };
        image_alt: string;
        meta_description: string;
        content: string;
        tags: string[];
        title_slug: string;
        _mby: string;
        _by: string;
        modified: number;
        created: number;
        _id: string;
      }
    ];
    total: number;
  };
}
