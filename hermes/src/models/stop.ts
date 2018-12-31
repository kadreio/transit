import {Table, Column, Model} from 'sequelize-typescript';

@Table({
  timestamps: true
})
export class Stop extends Model<Stop> {
  @Column
  stop_id: string;

  @Column
  code: string;

  @Column
  name: string;

  @Column
  desc: string;

  @Column
  lat: string;

  @Column
  lon: string;

  @Column
  zone_id: string;

  @Column
  url: string;

  @Column
  location_type: string;

  @Column
  parent_station: string;
}
