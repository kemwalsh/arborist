export const data = [
  { id: "1", name: "Asset Parent 1" },
  { id: "2", name: "Asset Parent 2" },
  {
    id: "3",
    name: "Asset Level 1",
    children: [
      { id: "c1", name: "Asset Child 1" },
      { id: "c2", name: "Asset Child 2" },
      { 
        id: "c3", name: "Asset Child 3",
        children: [
          { 
            id: "d111",
            name: "Steve", 
            children: [
              { 
                id: 'e1111', 
                name: "Jim", 
                children: [
                  {
                    id: 'f1111',
                    name: 'Jack'
                  }
                ] 
            
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "4",
    name: "Assets Parent 3",
    children: [
      { id: "d1", name: "Bassetz" },
      { id: "d2", name: "Cassetz" },
      { id: "d3", name: "Dassetz" }
    ]
  }
];


export const imageData = [
  {
  albumId: 1,
  id: 1,
  title: "accusamus beatae ad facilis cum similique qui sunt",
  url: "https://via.placeholder.com/600/92c952",
  thumbnailUrl: "https://via.placeholder.com/150/92c952"
  },
  {
  albumId: 1,
  id: 2,
  title: "reprehenderit est deserunt velit ipsam",
  url: "https://via.placeholder.com/600/771796",
  thumbnailUrl: "https://via.placeholder.com/150/771796"
  },
  {
  albumId: 1,
  id: 3,
  title: "officia porro iure quia iusto qui ipsa ut modi",
  url: "https://via.placeholder.com/600/24f355",
  thumbnailUrl: "https://via.placeholder.com/150/24f355"
  },
  {
  albumId: 1,
  id: 4,
  title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
  url: "https://via.placeholder.com/600/d32776",
  thumbnailUrl: "https://via.placeholder.com/150/d32776"
  },
  {
  albumId: 1,
  id: 5,
  title: "natus nisi omnis corporis facere molestiae rerum in",
  url: "https://via.placeholder.com/600/f66b97",
  thumbnailUrl: "https://via.placeholder.com/150/f66b97"
  },
  {
  albumId: 1,
  id: 6,
  title: "accusamus ea aliquid et amet sequi nemo",
  url: "https://via.placeholder.com/600/56a8c2",
  thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
  },
  {
  albumId: 1,
  id: 7,
  title: "officia delectus consequatur vero aut veniam explicabo molestias",
  url: "https://via.placeholder.com/600/b0f7cc",
  thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
  },
  ]
