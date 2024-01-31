var DataTypes = require("sequelize").DataTypes;
var _ARM_Combined = require("./ARM_Combined");
var _Admin_Action = require("./Admin_Action");
var _AllocateAssets = require("./AllocateAssets");
var _AllocateAssets_View = require("./AllocateAssets_View");
var _AssetAudit = require("./AssetAudit");
var _AssetAuditHeader = require("./AssetAuditHeader");
var _AssetAuditView = require("./AssetAuditView");
var _AssetDeviceData = require("./AssetDeviceData");
var _AssetImages = require("./AssetImages");
var _AssetMaster = require("./AssetMaster");
var _AssetVerifys = require("./AssetVerifys");
var _Asset_Excluded_List = require("./Asset_Excluded_List");
var _Asset_Excluded_List11 = require("./Asset_Excluded_List11");
var _Asset_Excluded_List_View = require("./Asset_Excluded_List_View");
var _Asset_Excluded_List_View1 = require("./Asset_Excluded_List_View1");
var _Asset_Movement_Log = require("./Asset_Movement_Log");
var _Asset_Status = require("./Asset_Status");
var _Books = require("./Books");
var _CSCS_Monitor = require("./CSCS_Monitor");
var _CategoryCount_View = require("./CategoryCount_View");
var _Departments = require("./Departments");
var _DeptAssetCount = require("./DeptAssetCount");
var _DeptCategoryCount_View = require("./DeptCategoryCount_View");
var _DeptListView = require("./DeptListView");
var _DesireReq = require("./DesireReq");
var _Dispose_Assets = require("./Dispose_Assets");
var _Notif_Batch = require("./Notif_Batch");
var _OfficeSpaceView = require("./OfficeSpaceView");
var _OperationLog = require("./OperationLog");
var _OutgoingAssets = require("./OutgoingAssets");
var _OutgoingAssets_View = require("./OutgoingAssets_View");
var _RelocateAssetHistory_View = require("./RelocateAssetHistory_View");
var _SequelizeMeta = require("./SequelizeMeta");
var _TagFile = require("./TagFile");
var _TagFileView = require("./TagFileView");
var _TagFileView22 = require("./TagFileView22");
var _TagFileView_mistake = require("./TagFileView_mistake");
var _TagFileView_new = require("./TagFileView_new");
var _TagFileView_outgoingAsset = require("./TagFileView_outgoingAsset");
var _UserProfile_View = require("./UserProfile_View");
var _UsersFamas = require("./UsersFamas");
var _aNotification = require("./aNotification");
var _aNotification_View = require("./aNotification_View");
var _aNotification_View_NewAsset = require("./aNotification_View_NewAsset");
var _assetcategory = require("./assetcategory");
var _assetinventory = require("./assetinventory");
var _barcodeimage2 = require("./barcodeimage2");
var _gpoAlarms = require("./gpoAlarms");
var _hjh = require("./hjh");
var _l_audit_log = require("./l_audit_log");
var _locations = require("./locations");
var _officeSpace = require("./officeSpace");
var _ooo = require("./ooo");
var _oooa = require("./oooa");
var _physical_inventory = require("./physical_inventory");
var _tblProfile = require("./tblProfile");
var _tblRelocateAssetHistory = require("./tblRelocateAssetHistory");
var _tblusertemp = require("./tblusertemp");
var _tty = require("./tty");
var _uProfile = require("./uProfile");
var _uProfile_View = require("./uProfile_View");
var _verifyAsset = require("./verifyAsset");
var _verifyAsset_View = require("./verifyAsset_View");

function initModels(sequelize) {
  var ARM_Combined = _ARM_Combined(sequelize, DataTypes);
  var Admin_Action = _Admin_Action(sequelize, DataTypes);
  var AllocateAssets = _AllocateAssets(sequelize, DataTypes);
  var AllocateAssets_View = _AllocateAssets_View(sequelize, DataTypes);
  var AssetAudit = _AssetAudit(sequelize, DataTypes);
  var AssetAuditHeader = _AssetAuditHeader(sequelize, DataTypes);
  var AssetAuditView = _AssetAuditView(sequelize, DataTypes);
  var AssetDeviceData = _AssetDeviceData(sequelize, DataTypes);
  var AssetImages = _AssetImages(sequelize, DataTypes);
  var AssetMaster = _AssetMaster(sequelize, DataTypes);
  var AssetVerifys = _AssetVerifys(sequelize, DataTypes);
  var Asset_Excluded_List = _Asset_Excluded_List(sequelize, DataTypes);
  var Asset_Excluded_List11 = _Asset_Excluded_List11(sequelize, DataTypes);
  var Asset_Excluded_List_View = _Asset_Excluded_List_View(sequelize, DataTypes);
  var Asset_Excluded_List_View1 = _Asset_Excluded_List_View1(sequelize, DataTypes);
  var Asset_Movement_Log = _Asset_Movement_Log(sequelize, DataTypes);
  var Asset_Status = _Asset_Status(sequelize, DataTypes);
  var Books = _Books(sequelize, DataTypes);
  var CSCS_Monitor = _CSCS_Monitor(sequelize, DataTypes);
  var CategoryCount_View = _CategoryCount_View(sequelize, DataTypes);
  var Departments = _Departments(sequelize, DataTypes);
  var DeptAssetCount = _DeptAssetCount(sequelize, DataTypes);
  var DeptCategoryCount_View = _DeptCategoryCount_View(sequelize, DataTypes);
  var DeptListView = _DeptListView(sequelize, DataTypes);
  var DesireReq = _DesireReq(sequelize, DataTypes);
  var Dispose_Assets = _Dispose_Assets(sequelize, DataTypes);
  var Notif_Batch = _Notif_Batch(sequelize, DataTypes);
  var OfficeSpaceView = _OfficeSpaceView(sequelize, DataTypes);
  var OperationLog = _OperationLog(sequelize, DataTypes);
  var OutgoingAssets = _OutgoingAssets(sequelize, DataTypes);
  var OutgoingAssets_View = _OutgoingAssets_View(sequelize, DataTypes);
  var RelocateAssetHistory_View = _RelocateAssetHistory_View(sequelize, DataTypes);
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var TagFile = _TagFile(sequelize, DataTypes);
  var TagFileView = _TagFileView(sequelize, DataTypes);
  var TagFileView22 = _TagFileView22(sequelize, DataTypes);
  var TagFileView_mistake = _TagFileView_mistake(sequelize, DataTypes);
  var TagFileView_new = _TagFileView_new(sequelize, DataTypes);
  var TagFileView_outgoingAsset = _TagFileView_outgoingAsset(sequelize, DataTypes);
  var UserProfile_View = _UserProfile_View(sequelize, DataTypes);
  var UsersFamas = _UsersFamas(sequelize, DataTypes);
  var aNotification = _aNotification(sequelize, DataTypes);
  var aNotification_View = _aNotification_View(sequelize, DataTypes);
  var aNotification_View_NewAsset = _aNotification_View_NewAsset(sequelize, DataTypes);
  var assetcategory = _assetcategory(sequelize, DataTypes);
  var assetinventory = _assetinventory(sequelize, DataTypes);
  var barcodeimage2 = _barcodeimage2(sequelize, DataTypes);
  var gpoAlarms = _gpoAlarms(sequelize, DataTypes);
  var hjh = _hjh(sequelize, DataTypes);
  var l_audit_log = _l_audit_log(sequelize, DataTypes);
  var locations = _locations(sequelize, DataTypes);
  var officeSpace = _officeSpace(sequelize, DataTypes);
  var ooo = _ooo(sequelize, DataTypes);
  var oooa = _oooa(sequelize, DataTypes);
  var physical_inventory = _physical_inventory(sequelize, DataTypes);
  var tblProfile = _tblProfile(sequelize, DataTypes);
  var tblRelocateAssetHistory = _tblRelocateAssetHistory(sequelize, DataTypes);
  var tblusertemp = _tblusertemp(sequelize, DataTypes);
  var tty = _tty(sequelize, DataTypes);
  var uProfile = _uProfile(sequelize, DataTypes);
  var uProfile_View = _uProfile_View(sequelize, DataTypes);
  var verifyAsset = _verifyAsset(sequelize, DataTypes);
  var verifyAsset_View = _verifyAsset_View(sequelize, DataTypes);


  return {
    ARM_Combined,
    Admin_Action,
    AllocateAssets,
    AllocateAssets_View,
    AssetAudit,
    AssetAuditHeader,
    AssetAuditView,
    AssetDeviceData,
    AssetImages,
    AssetMaster,
    AssetVerifys,
    Asset_Excluded_List,
    Asset_Excluded_List11,
    Asset_Excluded_List_View,
    Asset_Excluded_List_View1,
    Asset_Movement_Log,
    Asset_Status,
    Books,
    CSCS_Monitor,
    CategoryCount_View,
    Departments,
    DeptAssetCount,
    DeptCategoryCount_View,
    DeptListView,
    DesireReq,
    Dispose_Assets,
    Notif_Batch,
    OfficeSpaceView,
    OperationLog,
    OutgoingAssets,
    OutgoingAssets_View,
    RelocateAssetHistory_View,
    SequelizeMeta,
    TagFile,
    TagFileView,
    TagFileView22,
    TagFileView_mistake,
    TagFileView_new,
    TagFileView_outgoingAsset,
    UserProfile_View,
    UsersFamas,
    aNotification,
    aNotification_View,
    aNotification_View_NewAsset,
    assetcategory,
    assetinventory,
    barcodeimage2,
    gpoAlarms,
    hjh,
    l_audit_log,
    locations,
    officeSpace,
    ooo,
    oooa,
    physical_inventory,
    tblProfile,
    tblRelocateAssetHistory,
    tblusertemp,
    tty,
    uProfile,
    uProfile_View,
    verifyAsset,
    verifyAsset_View,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
