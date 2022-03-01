import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ZeitWebpartWebPartStrings';
import ZeitWebpart from './components/ZeitWebpart';
import { IZeitWebpartProps } from './components/IZeitWebpartProps';

export interface IZeitWebpartWebPartProps {
  description: string;
  GeschäftsreiseUrl: string;
  GeschäftsreiseIconUrl:string;
  JobsUrl: string;
  JobsIconUrl: string;
  KolleginnenUrl: string;
  KolleginnenIconUrl: string;
  NotfalUrl: string;
  NotfalIconUrl: string;
  SchwarzesBrettUrl: string;
  SchwarzesBrettIconUrl: string;
  SpeiseplanUrl: string;
  SpeiseplanIconUrl: string;
  UrlaubUrl: string;
  UrlaubIconUrl: string;
  VDokUrl: string;
  VDokIconUrl:string;
  ZeitOnlineUrl: string;
  ZeitOnlineIconUrl: string;
}

export default class ZeitWebpartWebPart extends BaseClientSideWebPart<IZeitWebpartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IZeitWebpartProps> = React.createElement(
      ZeitWebpart,
      {
        description: this.properties.description,
        GeschäftsreiseUrl: this.properties.GeschäftsreiseUrl,
        
        JobsUrl: this.properties.JobsUrl,
       
        KolleginnenUrl: this.properties.KolleginnenUrl,
       
        NotfalUrl: this.properties.NotfalUrl,
       
        SchwarzesBrettUrl: this.properties.SchwarzesBrettUrl,
        
        SpeiseplanUrl: this.properties.SpeiseplanUrl,
       
        UrlaubUrl: this.properties.UrlaubUrl,
       
        VDokUrl: this.properties.VDokUrl,
        
        ZeitOnlineUrl: this.properties.ZeitOnlineUrl,
        
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Web Part"
          },
          groups: [
            {
              groupName: "Group 1",
              groupFields: [
                PropertyPaneTextField('description', {
                  label: "Webpart Title"
                }),
                PropertyPaneTextField('GeschäftsreiseUrl', {
                  label: "Geschäftsreise Url"
                }),
                
                PropertyPaneTextField('JobsUrl', {
                  label: "Jobs Url"
                }),
                PropertyPaneTextField('KolleginnenUrl', {
                  label: "Kolleginnen Url"
                }),
                PropertyPaneTextField('NotfalUrl', {
                  label: "Notfal Url"
                }),
                PropertyPaneTextField('SchwarzesBrettUrl', {
                  label: "Schwarzes Brett Url"
                }),
                PropertyPaneTextField('SpeiseplanUrl', {
                  label: "Speiseplan Url"
                }),
                PropertyPaneTextField('UrlaubUrl', {
                  label: "Urlaub Url"
                }),
                PropertyPaneTextField('VDokUrl', {
                  label: "VDok Url"
                }),
                PropertyPaneTextField('ZeitOnlineUrl', {
                  label: "Zeit Online Url"
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
