/**
 * Created by gilbertor on 3/22/16.
 */


Router.route('/dashboard/inventory', {
  name: 'dashboard.inventory',
  where: 'client',
  controller:'InventoryController',
  action:'listInventory'
});

Router.route('/dashboard/inventory/add', {
  name: 'dashboard.inventory.add',
  where: 'client',
  controller:'InventoryController',
  action:'AddInventory'
});
