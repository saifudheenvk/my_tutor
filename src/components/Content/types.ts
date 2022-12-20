export interface IRouteItem{
    path: string;
    element: any;
    isPublic: boolean;
    loader?:any
}