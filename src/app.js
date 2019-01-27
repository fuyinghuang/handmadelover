import angular from 'angular';
import '@uirouter/angularjs'
import './style/style.scss';
import 'bulma';
import Router from './config/router';


angular.module('handmadelover', ['ui.router'])
  .config(Router);
