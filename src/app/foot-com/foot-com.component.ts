import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NzModalService, NzNotificationService} from 'ng-zorro-antd';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-foot-com',
  templateUrl: './foot-com.component.html',
  styleUrls: ['./foot-com.component.less']
})
export class FootComComponent implements OnInit {
  isVisible = false;
  validateForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NzModalService,
    private fb: FormBuilder,
    private notification: NzNotificationService
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      phone: [ null, [ Validators.required ] ],
    });
    this.validateForm = new FormGroup({
      'userName': new FormControl(null, {
        'validators': [Validators.required],
        updateOn: 'blur'
      }),
      'phone': new FormControl(null, {
        'validators': [ Validators.required, Validators.minLength(11), Validators.maxLength(11)],
        updateOn: 'blur'
      }),
    }); // <-- add custom validator at the FormGroup level
  }

  goAboutUs() {
    if (this.router.url.indexOf('about') > -1) {
      window.location.reload();
      return;
    }
    this.router.navigate(['about']);

  }

  info(): void {
    this.modalService.info({
      nzTitle: '联系我们',
      nzContent: '请拨打客服电话13770558245',
    });
  }

  // 模态框确定事件
  handleOk() {
    for(const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }

    if (this.validateForm.valid) {
        this.notification.success('登记成功', '我们会在第一时间联系您');
        this.handleCancel();
        this.validateForm.reset();
        return;
    }
  }

  showModal() {
    this.isVisible = true;
  }

  // 模态框取消事件
  handleCancel() {
    this.isVisible = false;
  }
}
