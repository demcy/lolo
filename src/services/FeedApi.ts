import Axios from 'axios';
import { IFeed } from '../domain/IFeed';

export abstract class FeedApi {



    private static axios = Axios.create(
        {
            baseURL: 'https://flipboard.com/@raimoseero/feed-nii8kd0sz.rss',
            
            proxy: {
                host: 'https://flipboard.com/',
                port: 443
            },
            // headers: {
            //     common: {
            //         'Content-Type': 'application/xml',
            //         'Access-Control-Allow-Headers': '*',
            //         'Access-Control-Allow-Methods': 'OPTIONS'
            //     }
            // },
           
        }
    )

    static async getAll(): Promise<IFeed[]> {
        const url = '';
        try{
            const response = await this.axios.get<IFeed[]>(url);
            
            console.log('get all response', response);
            if (response.status === 200) {
                return response.data;
            }
            return [];
        }
        catch (error) {
            console.log('error', (error as Error).message);
            return [];
        }
    }
}