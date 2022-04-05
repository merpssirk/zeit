import * as React from 'react';
import styles from './ZeitWebpart.module.scss';
import { IZeitWebpartProps } from './IZeitWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class ZeitWebpart extends React.Component<IZeitWebpartProps, {}> {
  public render(): React.ReactElement<IZeitWebpartProps> {
    return (
      <div className={ styles.zeitWebpart }>
        <div className={styles.actionBox}>
          <div title={this.props.description}>
            {this.props.description}
          </div>
        </div>
        <div className={ styles.container }>
          <div >
          <a className={styles.geschaftsreise} href={this.props.GeschäftsreiseUrl} target="_blank">
            <img className={styles.image} src="https://cdn-icons-png.flaticon.com/512/66/66273.png" alt="" />
            <span>Geschäftsreise</span>      
          </a>   
          </div>
          <div>
          <a className={styles.geschaftsreise} href={this.props.JobsUrl} target="_blank">
            <img className={styles.image} src="https://freeiconshop.com/wp-content/uploads/edd/wrench-outline.png" alt="" />
            <span>Jobs</span>
            </a>
            </div>

          <div>
          <a className={styles.geschaftsreise} href={this.props.KolleginnenUrl} target="_blank">
            <img className={styles.image} src="https://freeiconshop.com/wp-content/uploads/edd/people-solid.png" alt="" />
            <span>Kolleginnen</span>
           </a>
          </div>

          <div>
          <a className={styles.geschaftsreise} href={this.props.NotfalUrl} target="_blank">
            <img className={styles.image} src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/344/external-emergency-virus-icongeek26-glyph-icongeek26.png" alt="" />
            <span>Notfall</span>
            </a>
          </div>

          <div>
          <a className={styles.geschaftsreise} href={this.props.SchwarzesBrettUrl} target="_blank">
            <img className={styles.image} src="https://cdn-icons-png.flaticon.com/512/73/73169.png" alt="" />
            <span>Schwarzes Brett</span>
            </a>
            </div>

          <div>
          <a className={styles.geschaftsreise} href={this.props.SpeiseplanUrl} target="_blank">
            <img className={styles.image} src="https://cdn-icons-png.flaticon.com/512/272/272186.png" alt="" />
            <span>Speiseplan</span>
            </a>
            </div>

           <div>
           <a className={styles.geschaftsreise} href={this.props.UrlaubUrl} target="_blank">
            <img className={styles.image} src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/344/external-vacation-celebration-holiday-flatart-icons-outline-flatarticons.png" alt="" />
            <span>Urlaub</span>
            </a>
            </div>

            <div>
            <a className={styles.geschaftsreise} href={this.props.VDokUrl} target="_blank">
            <img className={styles.image} src="https://cdn-icons-png.flaticon.com/512/2942/2942924.png" alt="" />
            <span>VDok</span>
            </a>
            </div>
          
         <div>
            <a className={styles.geschaftsreise} href={this.props.ZeitOnlineUrl} target="_blank">
              <img className={styles.image} src="https://cdn-icons-png.flaticon.com/512/1074/1074106.png" alt="" />
              <span>Zeit Online</span>
            </a>
         
            </div>
        </div>
      </div>
    );
  }
}
