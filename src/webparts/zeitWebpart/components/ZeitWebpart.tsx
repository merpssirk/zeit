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
            <img className={styles.image} src="https://cdn-icons.flaticon.com/png/512/896/premium/896883.png?token=exp=1646065992~hmac=06c541399b044166db688dc1d72dc6c0" alt="" />
            <span>Jobs</span>
            </a>
            </div>

          <div>
          <a className={styles.geschaftsreise} href={this.props.KolleginnenUrl} target="_blank">
            <img className={styles.image} src="https://cdn-icons.flaticon.com/png/512/4795/premium/4795008.png?token=exp=1646066323~hmac=75c02f2b0708056f8619d9a6988aac62" alt="" />
            <span>Kolleginnen</span>
           </a>
          </div>

          <div>
          <a className={styles.geschaftsreise} href={this.props.NotfalUrl} target="_blank">
            <img className={styles.image} src="https://cdn-icons.flaticon.com/png/512/4600/premium/4600712.png?token=exp=1646066411~hmac=80c07f17caa961396439cb83c0f20939" alt="" />
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
            <img className={styles.image} src="https://cdn-icons.flaticon.com/png/512/2664/premium/2664589.png?token=exp=1646066698~hmac=8848a7cd25daf3d94816e626662c80ec" alt="" />
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
