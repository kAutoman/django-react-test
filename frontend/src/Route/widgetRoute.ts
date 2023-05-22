import Axios, { AxiosRequestHeaders } from "axios";
import { authHeader } from "./AuthToken";


export interface WidgetModel
{
    id: number,
    type: string,
    text: string,
    link: string,
};


export const read = async () =>
{
    let allWidgets: WidgetModel[] = [];
    await Axios.get(`${process.env.REACT_APP_PUBLIC_WIDGET_ENDPOINT}`,{ headers: authHeader() as AxiosRequestHeaders}).then(response =>
    {
        //get token from response
        const widget = response.data.widgets;
        allWidgets = widget;
        return widget;

    })
        .catch(err => console.log(err));
    return allWidgets;
}
export const readOne = async (_id: string) =>
{
    await Axios.get(`${process.env.REACT_APP_PUBLIC_WIDGET_ENDPOINT}`,{ headers: authHeader() as AxiosRequestHeaders}).then(response =>
    {
        //get token from response
        const widget = response.data.widgets;

        if (!widget)
        {
            console.log(response.data.message);
        } else
        {
            return widget;
        }

    })
        .catch(err => console.log(err));
}

export const create = async (_userId: string,
    _type: any,
    _text: string,
    _link: string) =>
{
    var request = {
        type: _type,
        //TODO: backend apparently doesnt allow for empty string
        text: _text === '' ? 'none' : _text,
        link: _link === '' ? 'null' : _link, 
    }
    await Axios.post(
        `${process.env.REACT_APP_PUBLIC_WIDGET_ENDPOINT}`, 
        request,      
        { headers: authHeader() as AxiosRequestHeaders }
    )
    .then(response =>
    {
        //get token from response
        const message = response.data.message;

        console.log(message);

    })
    .catch(err => console.log(err));
}
export const UpdateOne = async (_id: string,
    _type: any,
    _text: string,
    _link: string) =>
{
    var request = {
        type: _type,
        //TODO: backend apparently doesnt allow for empty string
        text: _text === '' ? 'none' : _text,
        link: _link === ''? 'null' : _link, 
    }
    await Axios.put(
        `${process.env.REACT_APP_PUBLIC_WIDGET_ENDPOINT}/${_id}`,
        request,
        { headers: authHeader() as AxiosRequestHeaders})
    .then(response =>
    {
        //get token from response
        const message = response.data.message;
        console.log(message);
    })
    .catch(err => console.log(err));
}

export const deleteOne = async (_id: string) =>
{
    await Axios.delete(`${process.env.REACT_APP_PUBLIC_WIDGET_ENDPOINT}`,{ headers: authHeader() as AxiosRequestHeaders}).then(response =>
    {
        const message = response.data.message;
        console.log(message);
    })
        .catch(err => console.log(err));
}
export const deleteByUser = async (_id: string) =>
{
    await Axios.get(`${process.env.REACT_APP_PUBLIC_WIDGET_ENDPOINT}`,{ headers: authHeader() as AxiosRequestHeaders}).then(response =>
    {
        //get token from response
        const widget = response.data.widgets;

        if (!widget)
        {
            console.log(response.data.message);
        } else
        {
            return widget;
        }

    })
        .catch(err => console.log(err));
}
