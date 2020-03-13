import { Component, OnInit } from '@angular/core';
import {
    AdvancedLayout,
    Description,
    DescriptionStrategy,
    Image,
    PlainGalleryConfig,
    PlainGalleryStrategy
} from '@ks89/angular-modal-gallery';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

    customPlainGalleryRowDescConfig: PlainGalleryConfig = {
        strategy: PlainGalleryStrategy.CUSTOM,
        layout: new AdvancedLayout(-1, true)
    };

    images: Image[] = [
        {
            id: 1,
            modal: {
                img: 'https://picsum.photos/392/240?random=1',
                description: 'Описание фотографии'
            }
        },
        {
            id: 2,
            modal: {
                img: 'https://picsum.photos/392/240?random=2',
                description: 'Описание фотографии'
            }
        },
        {
            id: 3,
            modal: {
                img: 'https://picsum.photos/392/240?random=3',
                description: 'Описание фотографии'
            }
        },
        {
            id: 4,
            modal: {
                img: 'https://picsum.photos/392/240?random=4',
                description: 'Описание фотографии'
            }
        },
        {
            id: 5,
            modal: {
                img: 'https://picsum.photos/392/240?random=5',
                description: 'Описание фотографии'
            }
        },
        {
            id: 6,
            modal: {
                img: 'https://picsum.photos/392/240?random=6',
                description: 'Описание фотографии'
            }
        },
        {
            id: 7,
            modal: {
                img: 'https://picsum.photos/392/240?random=7',
                description: 'Описание фотографии'
            }
        },
        {
            id: 8,
            modal: {
                img: 'https://picsum.photos/392/240?random=8',
                description: 'Описание фотографии'
            }
        }
    ];

    constructor() { }

    ngOnInit() {
    }


    openImageModalRowDescription(image: Image) {
        console.log('Opening modal gallery from custom plain gallery row and description, with image: ', image);
        const index: number = this.getCurrentIndexCustomLayout(image, this.images);
        this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, {
            layout: new AdvancedLayout(index, true)
        });
    }
    private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
        return image ? images.indexOf(image) : -1;
    }


}
