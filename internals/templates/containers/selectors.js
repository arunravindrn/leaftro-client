import { createSelector } from 'reselect';


const select<%= name %> = state => state.get('<%= camelCaseName %>');

export {
  select<%= name %>
}
