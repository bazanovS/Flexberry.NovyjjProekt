import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-novyjj-proekt-заказ-l');
  this.route('i-i-s-novyjj-proekt-заказ-e',
  { path: 'i-i-s-novyjj-proekt-заказ-e/:id' });
  this.route('i-i-s-novyjj-proekt-заказ-e.new',
  { path: 'i-i-s-novyjj-proekt-заказ-e/new' });
  this.route('i-i-s-novyjj-proekt-ингредиенты-l');
  this.route('i-i-s-novyjj-proekt-ингредиенты-e',
  { path: 'i-i-s-novyjj-proekt-ингредиенты-e/:id' });
  this.route('i-i-s-novyjj-proekt-ингредиенты-e.new',
  { path: 'i-i-s-novyjj-proekt-ингредиенты-e/new' });
  this.route('i-i-s-novyjj-proekt-напитки-l');
  this.route('i-i-s-novyjj-proekt-напитки-e',
  { path: 'i-i-s-novyjj-proekt-напитки-e/:id' });
  this.route('i-i-s-novyjj-proekt-напитки-e.new',
  { path: 'i-i-s-novyjj-proekt-напитки-e/new' });
  this.route('i-i-s-novyjj-proekt-продукты-l');
  this.route('i-i-s-novyjj-proekt-продукты-e',
  { path: 'i-i-s-novyjj-proekt-продукты-e/:id' });
  this.route('i-i-s-novyjj-proekt-продукты-e.new',
  { path: 'i-i-s-novyjj-proekt-продукты-e/new' });
  this.route('i-i-s-novyjj-proekt-составы-l');
  this.route('i-i-s-novyjj-proekt-составы-e',
  { path: 'i-i-s-novyjj-proekt-составы-e/:id' });
  this.route('i-i-s-novyjj-proekt-составы-e.new',
  { path: 'i-i-s-novyjj-proekt-составы-e/new' });
  this.route('i-i-s-novyjj-proekt-сотрудники-l');
  this.route('i-i-s-novyjj-proekt-сотрудники-e',
  { path: 'i-i-s-novyjj-proekt-сотрудники-e/:id' });
  this.route('i-i-s-novyjj-proekt-сотрудники-e.new',
  { path: 'i-i-s-novyjj-proekt-сотрудники-e/new' });
});

export default Router;
