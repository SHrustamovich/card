interface IDataType {
    id: number;
    color: string;
    price: string;
    aksiya: number;
    count: number;
    img: string;
}
export interface IData {
    id: number;
    text: string;
    img: string;
    type: IDataType[];
}
export const data: IData[] = [
    {
        id: 1,
        text: "Bolalar uchun yumshoq o'yinchog'i, Lilo va Stitch sovg'a uchun, moviy va pushti ranglar",
        img: "https://us.tonies.com/cdn/shop/products/Tonies-PDP-Assets-liloandstitch-hover.jpg?v=1674242590&width=3000",
        type: [
            {
                id: 1,
                color: "Sariq",
                price: "599999",
                aksiya: 20,
                count: 4,
                img: "https://cdn.inspireuplift.com/uploads/images/seller_products/1689849782_MR-207202317430-qualityperfectionus-digital-download-lilo-stitch-angel-image-1.jpg",
            },
            {
                id: 2,
                color: "Pushti",
                price: "499999",
                aksiya: 15,
                count: 12,
                img: "https://image.smythstoys.com/original/desktop/220760.jpg",
            },
            {
                id: 3,
                color: "Qizil",
                price: "799999",
                aksiya: 25,
                count: 2,
                img: "https://as1.ftcdn.net/v2/jpg/00/87/56/94/500_F_87569486_ZcZtKGwct29xMLHCmf2gTalcFO9jGQSg.jpg",
            },
        ],
    },
];
