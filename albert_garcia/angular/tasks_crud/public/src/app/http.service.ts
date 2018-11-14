import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})


export class HttpService {
  constructor(private _http: HttpClient){

  };
  getTasks(){

    return this._http.get('/tasks');
  };
  getTask_id(id:String){
    return this._http.get(`/tasks/${id}`);
  };
  addTask(newTask){
    return this._http.post(`/tasks`, newTask);
  };
  updateTask(id, task){
    return this._http.put(`/tasks/${id}`, task);
  };
  deleteTask(id,task){
    return this._http.delete(`/tasks/${id}`, task);
  }
}


