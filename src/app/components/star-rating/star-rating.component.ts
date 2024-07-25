import { CommonModule } from '@angular/common';
import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: StarRatingComponent,
      multi: true
    }
  ]
})
export class StarRatingComponent implements ControlValueAccessor{
  private _rating:number = 3;
  ratingArr:number[] = [];

  private _onChanged: Function = (_value: number) => {};
  private _onTouch: Function = (_value: number) => {};

  ngOnInit():void {
    for (let index = 0; index < 5; index++) {
      this.ratingArr.push(index)
    }
  }
  onClick(rating:number): void {
    this._rating = rating
    this._onChanged(this._rating)
    this._onTouch(this._rating)

  }
  showIcon(index:number):boolean {
    return this._rating >= index + 1
  }
  writeValue(value: number): void {
      console.log('value', value)
      if (value) {
        this._rating = value;
        console.log(value)
      }
  }
  registerOnChange(fn: Function ): void {
    this._onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }

}
