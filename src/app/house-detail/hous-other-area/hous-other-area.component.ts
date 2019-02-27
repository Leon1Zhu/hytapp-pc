import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hous-other-area',
  templateUrl: './hous-other-area.component.html',
  styleUrls: ['./hous-other-area.component.less']
})
export class HousOtherAreaComponent implements OnInit, AfterViewInit {
  @Input() houseInfo: any;
  mapSearchList: Array;
  map: any;
  mapPoint: any;
  showMore: false;
  searchResult: Array;
  math = Math;
  constructor() {
    this.mapSearchList = [
      {
        name: '交通',
        searchInfo: ['公交车站', '地铁站'],
        active: true,
      },
      {
        name: '商超',
        searchInfo: ['商店', '超市'],
        active: false,
      },
      {
        name: '教育',
        searchInfo: ['幼儿园', '小学', '初中', '高中', '大学'],
        active: false,
      },
      {
        name: '餐饮',
        searchInfo: '餐饮',
        active: false,
      },
      {
        name: '医疗',
        searchInfo: '医疗',
        active: false,
      }];
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initMap();
    }, 500)

  }

  initMap () {
    const that = this;
    const myGeo = new BMap.Geocoder();
    // 将地址解析结果显示在地图上，并调整地图视野
    myGeo.getPoint(this.houseInfo.address, (point) => {
      if (point) {
        this.map = new BMap.Map('allmap');
        this.mapPoint = new BMap.Point(point.lng, point.lat);
        this.map.enableScrollWheelZoom();
        this. map.centerAndZoom(this.mapPoint, 11);
        this.searchInfoInMap(that.mapSearchList[0].searchInfo);
      }
    }, '南京');
  },

  selectMapItem(item) {
    this.mapSearchList.forEach((listItem) => {
      listItem.active = false;
    })
    item.active = true;
    this.searchInfoInMap(item.searchInfo);
  }

  paintSearchResult (result, searchName) {
    this.searchResult = [];
    if (result.length) {
      result.forEach((item) => {
        if (searchName.join(',').indexOf('公交车站') > -1) {
          item.Ar.forEach((arItem) => {
            arItem.title = `${arItem.title}-${item.keyword}`;
          });
        }
        this.searchResult = this.searchResult.concat(item.Ar);
      });
    } else {
      this.searchResult = result.Ar;
    }
  },

  searchInfoInMap(item) {
    this.map.clearOverlays();
    const circle = new BMap.Circle(this.mapPoint, 1500, {fillColor: 'blue', strokeWeight: 1 , fillOpacity: 0.3, strokeOpacity: 0.3});
    this.map.addOverlay(circle);
    const local =  new BMap.LocalSearch(
      this.map,
      {renderOptions: {map: this.map, selectFirstResult: false, },
        pageCapacity: 7,
        onSearchComplete: (result) => {
        this.paintSearchResult(result, item);
      }});
    local.searchNearby(item, this.mapPoint, 1500);

  },

}
