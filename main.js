// -------------------------------------------------------------------------------------------------------------
// Unofficial patch 2.1 by RandomDude
// All credit to the original creator Frank Lantz, source code from https://www.decisionproblem.com/paperclips/
// -------------------------------------------------------------------------------------------------------------


// Threnody ---------------------------------------------------------
function threnodyLoaded()
{
    threnodyLoadedBool = true; 
}

var threnodyAudio;

function loadThrenody() {
    threnodyAudio.src = "test.mp3";
    threnodyAudio.addEventListener('canplaythrough', threnodyLoaded);
}

function playThrenody(){
    if(threnodyLoadedBool)
    {
        threnodyAudio.play();
    }
}

// Cache all DOM elements

function cacheDOMElements(){
    wireCostElement =                   document.getElementById("wireCost");
    wireBuyerStatusElement =            document.getElementById("wireBuyerStatus");
    wireElement =                       document.getElementById("wire");
    fundsElement =                      document.getElementById("funds");
    qCompDisplayElement =               document.getElementById("qCompDisplay");
    hypnoDroneTextElement =             document.getElementById("hypnoDroneText");
    readoutElement1 =                   document.getElementById("readout1");
    readoutElement2 =                   document.getElementById("readout2");
    readoutElement3 =                   document.getElementById("readout3");
    readoutElement4 =                   document.getElementById("readout4");
    readoutElement5 =                   document.getElementById("readout5");
    readoutElement6 =                   document.getElementById("readout6");
    readoutElement7 =                   document.getElementById("readout7");
    readoutElement8 =                   document.getElementById("readout8");
    readoutElementTime =                document.getElementById("readoutClock");
    mpdsDivElement =                    document.getElementById("mdpsDiv");
    factoryRebootToolTipElement =       document.getElementById("factoryRebootToolTip"); 
    havesterRebootToolTipElement =      document.getElementById("harvesterRebootToolTip");
    wireDroneRebootToolTipElement =     document.getElementById("wireDroneRebootToolTip");
    farmRebootToolTipElement =          document.getElementById("farmRebootToolTip");
    batteryRebootToolTipElement =       document.getElementById("batteryRebootToolTip");
    swarmSliderDivElement =             document.getElementById("swarmSliderDiv");
    clipCountCrunchedElement =          document.getElementById("clipCountCrunched");
    autoTourneyStatusDivElement =       document.getElementById("autoTourneyStatusDiv");
    autoTourneyControlElement   =       document.getElementById("autoTourneyControl");
    wireBuyerDivElement =               document.getElementById("wireBuyerDiv");
    tournamentResultsTableElement =     document.getElementById("tournamentResultsTable");
    tournamentStuffElement =            document.getElementById("tournamentStuff");
    increaseMaxTrustDivElement =        document.getElementById("increaseMaxTrustDiv");
    honorDivElement =                   document.getElementById("honorDiv");
    drifterDivElement =                 document.getElementById("drifterDiv");
    battleCanvasDivElement =            document.getElementById("battleCanvasDiv");
    combatButtonDivElement =            document.getElementById("combatButtonDiv");
    factoryUpgradeDisplayElement =      document.getElementById("factoryUpgradeDisplay");
    droneUpgradeDisplayElement =        document.getElementById("droneUpgradeDisplay");
    btnIncreaseMaxTrustElement =        document.getElementById("btnIncreaseMaxTrust");
    btnMakerProbeElement =              document.getElementById("btnMakeProbe");
    hazardBodyCountElement =            document.getElementById("hazardBodyCount");
    probesLostHazardsDisplayElement =   document.getElementById("probesLostHazardsDisplay");
    driftBodyCountElement =             document.getElementById("driftBodyCount");
    combatBodyCountElement =            document.getElementById("combatBodyCount");
    prestigeDivElement =                document.getElementById("prestigeDiv");
    btnMakePaperclipElement =           document.getElementById("btnMakePaperclip");
    btnBuyWireElement =                 document.getElementById("btnBuyWire");
    btnMakeClipperElement =             document.getElementById("btnMakeClipper");
    btnExpandMarketingElement =         document.getElementById("btnExpandMarketing");
    btnLowerPriceElement =              document.getElementById("btnLowerPrice");
    btnAddProcElement =                 document.getElementById("btnAddProc");
    btnAddMemElement =                  document.getElementById("btnAddMem");
    btnNewTournamentElement =           document.getElementById("btnNewTournament");
    btnImproveInvestmentsElement =      document.getElementById("btnImproveInvestments");
    investmentEngineElement =           document.getElementById("investmentEngine");
    investmentEngineUpgradeElement =    document.getElementById("investmentEngineUpgrade");
    strategyEngineElement =             document.getElementById("strategyEngine");
    tournamentManagementElement =       document.getElementById("tournamentManagement");
    megaClipperDivElement =             document.getElementById("megaClipperDiv");
    btnMakeMegaClipperElement =         document.getElementById("btnMakeMegaClipper");
    autoClipperDivElement =             document.getElementById("autoClipperDiv");
    revPerSecDivElement =               document.getElementById("revPerSecDiv");
    compDivElement =                    document.getElementById("compDiv");
    creativityDivElement =              document.getElementById("creativityDiv");
    projectsDivElement =                document.getElementById("projectsDiv");
    businessDivElement =                document.getElementById("businessDiv");
    manufacturingDivElement =           document.getElementById("manufacturingDiv");
    trustDivElement =                   document.getElementById("trustDiv");
    creationDivElement =                document.getElementById("creationDiv");
    factoryDivElement =                 document.getElementById("factoryDiv");
    wireProductionDivElement =          document.getElementById("wireProductionDiv");
    wireTransDivElement =               document.getElementById("wireTransDiv");
    harvesterDivElement =               document.getElementById("harvesterDiv");
    wireDroneDivElement =               document.getElementById("wireDroneDiv");
    tothDivElement =                    document.getElementById("tothDiv");
    spaceDivElement =                   document.getElementById("spaceDiv");
    factoryDivSpaceElement =            document.getElementById("factoryDivSpace");
    droneDivSpaceElement =              document.getElementById("droneDivSpace");
    probeDesignDivElement =             document.getElementById("probeDesignDiv");
    increaseProbeTrustDivElement =      document.getElementById("increaseProbeTrustDiv");
    qComputingElement =                 document.getElementById("qComputing");
    btnMakeFactoryElement =             document.getElementById("btnMakeFactory");
    btnHarvesterRebootElement =         document.getElementById("btnHarvesterReboot");
    btnWireDroneRebootElement =         document.getElementById("btnWireDroneReboot");
    btnFactoryRebootElement =           document.getElementById("btnFactoryReboot");
    probeTrustUsedDisplayElement =      document.getElementById("probeTrustUsedDisplay");
    btnIncreaseProbeTrustElement =      document.getElementById("btnIncreaseProbeTrust");
    btnRaiseProbeSpeedElement =         document.getElementById("btnRaiseProbeSpeed");
    btnLowerProbeSpeedElement =         document.getElementById("btnLowerProbeSpeed");
    btnRaiseProbeNavElement =           document.getElementById("btnRaiseProbeNav");
    btnLowerProbeNavElement =           document.getElementById("btnLowerProbeNav");
    btnRaiseProbeRepElement =           document.getElementById("btnRaiseProbeRep");
    btnLowerProbeRepElement =           document.getElementById("btnLowerProbeRep");
    btnRaiseProbeHazElement =           document.getElementById("btnRaiseProbeHaz");
    btnLowerProbeHazElement =           document.getElementById("btnLowerProbeHaz");
    btnRaiseProbeFacElement =           document.getElementById("btnRaiseProbeFac");
    btnLowerProbeFacElement =           document.getElementById("btnLowerProbeFac");
    btnRaiseProbeHarvElement =          document.getElementById("btnRaiseProbeHarv");
    btnLowerProbeHarvElement =          document.getElementById("btnLowerProbeHarv");
    btnRaiseProbeWireElement =          document.getElementById("btnRaiseProbeWire");
    btnLowerProbeWireElement =          document.getElementById("btnLowerProbeWire");
    btnRaiseProbeCombatElement =        document.getElementById("btnRaiseProbeCombat");
    btnLowerProbeCombatElement =        document.getElementById("btnLowerProbeCombat");
    coverElement =                      document.getElementById("cover");
    hypnoDroneEventDivElement =         document.getElementById("hypnoDroneEventDiv");
    unusedClipsDisplayElement =         document.getElementById("unusedClipsDisplay");
    transWireElement =                  document.getElementById("transWire");
    nanoWireElement =                   document.getElementById("nanoWire");
    clipsElement =                      document.getElementById("clips");
    unsoldClipsElement =                document.getElementById("unsoldClips");
    yomiDisplayElement =                document.getElementById('yomiDisplay');
    projectListTopElement =             document.getElementById("projectListTop");
    investmentLevelElement =            document.getElementById("investmentLevel");
    driftersKilledElement =             document.getElementById('driftersKilled');
    availableMatterDisplayElement =     document.getElementById('availableMatterDisplay');
    honorDisplayElement =               document.getElementById("honorDisplay");
    clipmakerLevel2Element =            document.getElementById('clipmakerLevel2');
    clipperCostElement =                document.getElementById('clipperCost');
    acquiredMatterDisplayElement =      document.getElementById('acquiredMatterDisplay');
    nanoWireElement =                   document.getElementById('nanoWire');
    probesBornDisplayElement =          document.getElementById('probesBornDisplay');
    probesTotalDisplayElement =         document.getElementById('probesTotalDisplay');
    probesLaunchedDisplayElement =      document.getElementById('probesLaunchedDisplay');
    probeCostDisplayElement =           document.getElementById('probeCostDisplay');
    probeCombatDisplayElement =         document.getElementById('probeCombatDisplay');
    probeWireDisplayElement =           document.getElementById('probeWireDisplay');
    probeHarvDisplayElement =           document.getElementById('probeHarvDisplay');
    probeFacDisplayElement =            document.getElementById('probeFacDisplay');
    probeRepDisplayElement =            document.getElementById('probeRepDisplay');
    probeHazDisplayElement =            document.getElementById('probeHazDisplay');
    probeNavDisplayElement =            document.getElementById('probeNavDisplay');
    probeSpeedDisplayElement =          document.getElementById('probeSpeedDisplay');
    probeTrustDisplayElement =          document.getElementById('probeTrustDisplay');
    memoryElement =                     document.getElementById("memory");
    processorsElement =                 document.getElementById("processors");
    marginElement =                     document.getElementById("margin");
    marketingLvlElement =               document.getElementById('marketingLvl');
    adCostElement =                     document.getElementById('adCost');
    factoryCostDisplayElement =         document.getElementById('factoryCostDisplay');
    factoryLevelDisplayElement =        document.getElementById('factoryLevelDisplay');
    wireDroneCostDisplayElement =       document.getElementById('wireDroneCostDisplay');
    wireDroneLevelDisplayElement =      document.getElementById('wireDroneLevelDisplay');
    harvesterCostDisplayElement =       document.getElementById('harvesterCostDisplay');
    harvesterLevelDisplayElement =      document.getElementById('harvesterLevelDisplay');
    megaClipperCostElement =            document.getElementById('megaClipperCost');
    megaClipperLevelElement =           document.getElementById('megaClipperLevel');
    investmentBankrollElement =         document.getElementById('investmentBankroll');
    secValueElement =                   document.getElementById('secValue');
    portValueElement =                  document.getElementById('portValue');
    investUpgradeCostElement =          document.getElementById("investUpgradeCost");
    prestigeUcounterElement =           document.getElementById("prestigeUcounter");
    prestigeScounterElement =           document.getElementById("prestigeScounter");
    newTourneyCostElement =             document.getElementById("newTourneyCost");
    maxTrustDisplayElement =            document.getElementById("maxTrustDisplay");
    victoryDivElement =                 document.getElementById("victoryDiv");
    probeTrustCostDisplayElement =      document.getElementById("probeTrustCostDisplay");
    tournamentResultsTableElement =     document.getElementById("tournamentResultsTable");
    farmCostElement =                   document.getElementById('farmCost');
    batteryCostElement =                document.getElementById('batteryCost');
    farmLevelElement =                  document.getElementById('farmLevel');
    batteryLevelElement =               document.getElementById('batteryLevel');
    availableMatterDisplayElement =     document.getElementById('availableMatterDisplay');
    acquiredMatterDisplayElement =      document.getElementById('acquiredMatterDisplay');
    mapsElement =                       document.getElementById('maps');
    nanoWireElement =                   document.getElementById('nanoWire');
    wppsElement =                       document.getElementById('wpps');
    probeDesignDivElement =             document.getElementById("probeDesignDiv");
    increaseProbeTrustDivElement =      document.getElementById("increaseProbeTrustDiv");
    increaseMaxTrustDivElement =        document.getElementById("increaseMaxTrustDiv");
    spaceDivElement =                   document.getElementById("spaceDiv");
    battleCanvasDivElement =            document.getElementById("battleCanvasDiv");
    honorDivElement =                   document.getElementById("honorDiv");
    wireProductionDivElement =          document.getElementById("wireProductionDiv");
    wireTransDivElement =               document.getElementById("wireTransDiv");
    swarmGiftDivElement =               document.getElementById("swarmGiftDiv");
    swarmEngineElement =                document.getElementById("swarmEngine");
    swarmSliderDivElement =             document.getElementById("swarmSliderDiv");
    factoryDivSpaceElement =            document.getElementById("factoryDivSpace");
    clipsPerSecDivElement =             document.getElementById("clipsPerSecDiv");
    tothDivElement =                    document.getElementById("tothDiv");
    strategyEngineElement =             document.getElementById("strategyEngine");
    tournamentManagementElement =       document.getElementById("tournamentManagement");
    btnQcomputeElement =                document.getElementById("btnQcompute");
    qComputingElement =                 document.getElementById("qComputing");
    transWireElement =                  document.getElementById("transWire");
    processorDisplayElement =           document.getElementById("processorDisplay");
    compDivElement =                    document.getElementById("compDiv");
    projectsDivElement =                document.getElementById("projectsDiv");
    creationDivElement =                document.getElementById("creationDiv");
    stratPickerElement =                document.getElementById("stratPicker");
    investUpgradeCostElement =          document.getElementById("investUpgradeCost");
    yomiDisplayElement =                document.getElementById("yomiDisplay");
    investmentBankrollElement =         document.getElementById('investmentBankroll');
    secValueElement =                   document.getElementById('secValue');
    portValueElement =                  document.getElementById('portValue');
    investStratElement =                document.getElementById("investStrat");
    btnRunTournamentElement =           document.getElementById("btnRunTournament");
    vertStratElement =                  document.getElementById("vertStrat");
    horizStratElement =                 document.getElementById("horizStrat");
    vLabelaElement =                    document.getElementById("vLabela");
    vLabelbElement =                    document.getElementById("vLabelb");
    hLabelaElement =                    document.getElementById("hLabela");
    hLabelbElement =                    document.getElementById("hLabelb");
    aaPayoffHElement =                  document.getElementById("aaPayoffH");
    aaPayoffVElement =                  document.getElementById("aaPayoffV");
    abPayoffHElement =                  document.getElementById("abPayoffH");
    abPayoffVElement =                  document.getElementById("abPayoffV");
    baPayoffHElement =                  document.getElementById("baPayoffH");
    baPayoffVElement =                  document.getElementById("baPayoffV");
    bbPayoffHElement =                  document.getElementById("bbPayoffH");
    bbPayoffVElement =                  document.getElementById("bbPayoffV");
    autoTourneyStatusElement =          document.getElementById('autoTourneyStatus');
    tournamentTableElement =            document.getElementById("tournamentTable");
    tournamentResultsTableElement =     document.getElementById("tournamentResultsTable");
    tourneyDisplayElement =             document.getElementById("tourneyDisplay");
    payoffCellAAElement =               document.getElementById("payoffCellAA");
    payoffCellABElement =               document.getElementById("payoffCellAB");
    payoffCellBAElement =               document.getElementById("payoffCellBA");
    payoffCellBBElement =               document.getElementById("payoffCellBB");
    clipmakerLevel2Element =            document.getElementById('clipmakerLevel2');
    clipperCostElement =                document.getElementById('clipperCost');
    megaClipperLevelElement =           document.getElementById('megaClipperLevel');
    megaClipperCostElement =            document.getElementById('megaClipperCost');
    nextFactoryUpgradeElement =         document.getElementById("nextFactoryUpgrade");
    nextDroneUpgradeElement =           document.getElementById("nextDroneUpgrade");
    factoryLevelDisplayElement =        document.getElementById('factoryLevelDisplay');
    factoryCostDisplayElement =         document.getElementById('factoryCostDisplay');
    harvesterLevelDisplayElement =      document.getElementById('harvesterLevelDisplay');
    harvesterCostDisplayElement =       document.getElementById('harvesterCostDisplay');
    wireDroneLevelDisplayElement =      document.getElementById('wireDroneLevelDisplay');
    wireDroneCostDisplayElement =       document.getElementById('wireDroneCostDisplay');
    btnMakeHarvesterElement =           document.getElementById("btnMakeHarvester");
    btnHarvesterx10Element =            document.getElementById("btnHarvesterx10");
    btnHarvesterx100Element =           document.getElementById("btnHarvesterx100");
    btnHarvesterx1000Element =          document.getElementById("btnHarvesterx1000");
    btnMakeWireDroneElement =           document.getElementById("btnMakeWireDrone");
    btnWireDronex10Element =            document.getElementById("btnWireDronex10");
    btnWireDronex100Element =           document.getElementById("btnWireDronex100");
    btnWireDronex1000Element =          document.getElementById("btnWireDronex1000");
    sliderElement =                     document.getElementById("slider");
    btnSynchSwarmElement =              document.getElementById("btnSynchSwarm");
    btnEntertainSwarmElement =          document.getElementById("btnEntertainSwarm");
    swarmSizeElement =                  document.getElementById("swarmSize");
    swarmGiftsElement =                 document.getElementById("swarmGifts");
    swarmStatusElement =                document.getElementById("swarmStatus");
    giftCountdownElement =              document.getElementById("giftCountdown");
    giftTimerElement =                  document.getElementById("giftTimer");
    feedButtonDivElement =              document.getElementById("feedButtonDiv");
    teachButtonDivElement =             document.getElementById("teachButtonDiv");
    swarmEntertainCostElement =         document.getElementById("swarmEntertainCost");
    entertainButtonDivElement =         document.getElementById("entertainButtonDiv");
    cladButtonDivElement =              document.getElementById("cladButtonDiv");
    synchButtonDivElement =             document.getElementById("synchButtonDiv");
    swarmStatusDivElement =             document.getElementById("swarmStatusDiv");
    swarmEngineElement =                document.getElementById("swarmEngine");
    farmLevelElement =                  document.getElementById('farmLevel');
    farmCostElement =                   document.getElementById('farmCost');
    batteryLevelElement =               document.getElementById('batteryLevel');
    batteryCostElement =                document.getElementById('batteryCost');
    powerProductionRateElement =        document.getElementById("powerProductionRate");
    powerConsumptionRateElement =       document.getElementById("powerConsumptionRate");
    storedPowerElement =                document.getElementById("storedPower");
    facPowConRateElement =              document.getElementById("facPowConRate");
    dronePowConRateElement =            document.getElementById("dronePowConRate");
    maxStorageElement =                 document.getElementById("maxStorage");
    performanceElement =                document.getElementById("performance");
    btnMakeFarmElement =                document.getElementById("btnMakeFarm");
    btnMakeBatteryElement =             document.getElementById("btnMakeBattery");
    btnFarmRebootElement =              document.getElementById("btnFarmReboot");
    btnBatteryRebootElement =           document.getElementById("btnBatteryReboot");
    btnFarmx10Element =                 document.getElementById("btnFarmx10");
    btnFarmx100Element =                document.getElementById("btnFarmx100");
    btnBatteryx10Element =              document.getElementById("btnBatteryx10");
    btnBatteryx100Element =             document.getElementById("btnBatteryx100");
    powerDivElement =                   document.getElementById("powerDiv");
    adCostElement =                     document.getElementById('adCost');
    marketingLvlElement =               document.getElementById('marketingLvl');
    demandElement =                     document.getElementById("demand");
    marginElement =                     document.getElementById("margin");
    inchSpanElement =                   document.getElementById("inchSpan");
    demandElement =                     document.getElementById("demand");
    operationsElement =                 document.getElementById("operations");
    trustElement =                      document.getElementById("trust");
    nextTrustElement =                  document.getElementById("nextTrust");
    creativityElement =                 document.getElementById("creativity");
    factoryLevelDisplaySpaceElement =   document.getElementById("factoryLevelDisplaySpace");
    harvesterLevelSpaceElement =        document.getElementById("harvesterLevelSpace");
    wireDroneLevelSpaceElement =        document.getElementById("wireDroneLevelSpace");
    maxOpsElement =                     document.getElementById("maxOps");
    avgSalesElement =                   document.getElementById("avgSales");
    avgRevElement =                     document.getElementById("avgRev");
    probeTrustCostDisplayElement =      document.getElementById('probeTrustCostDisplay');
    mdpsElement =                       document.getElementById('mdps');
    colonizedDisplayElement =           document.getElementById('colonizedDisplay');
    probesLostHazardsDisplayElement =   document.getElementById('probesLostHazardsDisplay');
    probesTotalDisplayElement =         document.getElementById('probesTotalDisplay');
    probesLostDriftDisplayElement =     document.getElementById('probesLostDriftDisplay');
    probesTotalDisplayElement =         document.getElementById('probesTotalDisplay');
    drifterCountElement =               document.getElementById('drifterCount');
    mapsElement =                       document.getElementById('maps');
    swarmGiftDivElement =               document.getElementById("swarmGiftDiv");
    swarmEngineElement =                document.getElementById("swarmEngine");
    clipsPerSecDivElement =             document.getElementById("clipsPerSecDiv");
    tothDivElement =                    document.getElementById("tothDiv");
    clipmakerRateElement =              document.getElementById("clipmakerRate");
    clipmakerRate2Element =             document.getElementById("clipmakerRate2");


    stockSymbolElements.push(document.getElementById("stock1Symbol"));
    stockAmountElements.push(document.getElementById("stock1Amount"));
    stockPriceElements.push(document.getElementById("stock1Price"));
    stockTotalElements.push(document.getElementById("stock1Total"));
    stockProfitElements.push(document.getElementById("stock1Profit"));

    stockSymbolElements.push(document.getElementById("stock2Symbol"));
    stockAmountElements.push(document.getElementById("stock2Amount"));
    stockPriceElements.push(document.getElementById("stock2Price"));
    stockTotalElements.push(document.getElementById("stock2Total"));
    stockProfitElements.push(document.getElementById("stock2Profit"));

    stockSymbolElements.push(document.getElementById("stock3Symbol"));
    stockAmountElements.push(document.getElementById("stock3Amount"));
    stockPriceElements.push(document.getElementById("stock3Price"));
    stockTotalElements.push(document.getElementById("stock3Total"));
    stockProfitElements.push(document.getElementById("stock3Profit"));

    stockSymbolElements.push(document.getElementById("stock4Symbol"));
    stockAmountElements.push(document.getElementById("stock4Amount"));
    stockPriceElements.push(document.getElementById("stock4Price"));
    stockTotalElements.push(document.getElementById("stock4Total"));
    stockProfitElements.push(document.getElementById("stock4Profit"));

    stockSymbolElements.push(document.getElementById("stock5Symbol"));
    stockAmountElements.push(document.getElementById("stock5Amount"));
    stockPriceElements.push(document.getElementById("stock5Price"));
    stockTotalElements.push(document.getElementById("stock5Total"));
    stockProfitElements.push(document.getElementById("stock5Profit"));

    tourneyResultsElements.push(document.getElementById("results0"));
    tourneyResultsElements.push(document.getElementById("results1"));
    tourneyResultsElements.push(document.getElementById("results2"));
    tourneyResultsElements.push(document.getElementById("results3"));
    tourneyResultsElements.push(document.getElementById("results4"));
    tourneyResultsElements.push(document.getElementById("results5"));
    tourneyResultsElements.push(document.getElementById("results6"));
    tourneyResultsElements.push(document.getElementById("results7"));


}


var clipmakerRateElement;
var clipmakerRate2Element;
var availableMatterDisplayElement;
var acquiredMatterDisplayElement;
var mapsElement;
var nanoWireElement;
var wppsElement;
var probeDesignDivElement;
var increaseProbeTrustDivElement;
var increaseMaxTrustDivElement;
var spaceDivElement;
var battleCanvasDivElement;
var honorDivElement;
var wireProductionDivElement;
var wireTransDivElement;
var swarmGiftDivElement;
var swarmEngineElement;
var swarmSliderDivElement;
var factoryDivSpaceElement;
var clipsPerSecDivElement;
var tothDivElement;
var strategyEngineElement;
var tournamentManagementElement;
var btnQcomputeElement;
var qComputingElement;
var transWireElement;
var processorDisplayElement;
var compDivElement;
var projectsDivElement;
var creationDivElement;
var stratPickerElement;
var investUpgradeCostElement;
var yomiDisplayElement;
var investmentBankrollElement;
var fundsElement;
var secValueElement;
var portValueElement;
var investStratElement;
var btnRunTournamentElement;
var vertStratElement;
var horizStratElement;
var vLabelaElement;
var vLabelbElement;
var hLabelaElement;
var hLabelbElement;
var aaPayoffHElement;
var aaPayoffVElement;
var abPayoffHElement;
var abPayoffVElement;
var baPayoffHElement;
var baPayoffVElement;
var bbPayoffHElement;
var bbPayoffVElement;
var autoTourneyStatusElement;
var tournamentTableElement;
var tournamentResultsTableElement;
var tourneyDisplayElement;
var payoffCellAAElement;
var payoffCellABElement;
var payoffCellBAElement;
var payoffCellBBElement;
var clipmakerLevel2Element;
var clipperCostElement;
var megaClipperLevelElement;
var megaClipperCostElement;
var nextFactoryUpgradeElement;
var nextDroneUpgradeElement;
var factoryLevelDisplayElement;
var factoryCostDisplayElement;
var harvesterLevelDisplayElement;
var harvesterCostDisplayElement;
var wireDroneLevelDisplayElement;
var wireDroneCostDisplayElement;
var btnMakeHarvesterElement;
var btnHarvesterx10Element;
var btnHarvesterx100Element;
var btnHarvesterx1000Element;
var btnMakeWireDroneElement;
var btnWireDronex10Element;
var btnWireDronex100Element;
var btnWireDronex1000Element;
var sliderElement;
var btnSynchSwarmElement;
var btnEntertainSwarmElement;
var swarmSizeElement;
var swarmGiftsElement;
var swarmStatusElement;
var giftCountdownElement;
var giftTimerElement;
var feedButtonDivElement;
var teachButtonDivElement;
var swarmEntertainCostElement;
var entertainButtonDivElement;
var cladButtonDivElement;
var synchButtonDivElement;
var swarmStatusDivElement;
var swarmEngineElement;
var farmLevelElement;
var farmCostElement;
var batteryLevelElement;
var batteryCostElement;
var powerProductionRateElement;
var powerConsumptionRateElement;
var storedPowerElement;
var facPowConRateElement;
var dronePowConRateElement;
var maxStorageElement;
var performanceElement;
var btnMakeFarmElement;
var btnMakeBatteryElement;
var btnFarmRebootElement;
var btnBatteryRebootElement;
var btnFarmx10Element;
var btnFarmx100Element;
var btnBatteryx10Element;
var btnBatteryx100Element;
var powerDivElement;
var adCostElement;
var marketingLvlElement;
var demandElement;
var marginElement;
var inchSpanElement;
var demandElement;
var operationsElement;
var trustElement;
var nextTrustElement;
var creativityElement;
var factoryLevelDisplaySpaceElement;
var harvesterLevelSpaceElement;
var wireDroneLevelSpaceElement;
var maxOpsElement;
var avgSalesElement;
var avgRevElement;
var probeTrustCostDisplayElement;
var mdpsElement;
var colonizedDisplayElement;
var probesLostHazardsDisplayElement;
var probesTotalDisplayElement;
var probesLostDriftDisplayElement;
var probesTotalDisplayElement;
var drifterCountElement;
var mapsElement;
var swarmGiftDivElement;
var swarmEngineElement;
var clipsPerSecDivElement;
var tothDivElement;
var prestigeUcounterElement;
var prestigeScounterElement;
var newTourneyCostElement;
var maxTrustDisplayElement;
var victoryDivElement;
var probeTrustCostDisplayElement;
var tournamentResultsTableElement;
var farmCostElement;
var batteryCostElement;
var farmLevelElement;
var batteryLevelElement;
var wireDroneCostDisplayElement;
var wireDroneLevelDisplayElement;
var harvesterCostDisplayElement;
var harvesterLevelDisplayElement;
var megaClipperCostElement;
var megaClipperLevelElement;
var investmentBankrollElement;
var secValueElement;
var portValueElement;
var investUpgradeCostElement;
var driftersKilledElement;
var availableMatterDisplayElement;
var honorDisplayElement;
var clipmakerLevel2Element;
var clipperCostElement;
var acquiredMatterDisplayElement;
var nanoWireElement;
var probesBornDisplayElement;
var probesTotalDisplayElement;
var probesLaunchedDisplayElement;
var probeCostDisplayElement;
var probeCombatDisplayElement;
var probeWireDisplayElement;
var probeHarvDisplayElement;
var probeFacDisplayElement;
var probeRepDisplayElement;
var probeHazDisplayElement;
var probeNavDisplayElement;
var probeSpeedDisplayElement;
var probeTrustDisplayElement;
var memoryElement;
var processorsElement;
var marginElement;
var marketingLvlElement;
var adCostElement;
var factoryCostDisplayElement;
var factoryLevelDisplayElement;
var yomiDisplayElement;
var projectListTopElement;
var investmentLevelElement;

var wireCostElement;
var wireBuyerStatusElement;
var wireElement;

var qCompDisplayElement;

var hypnoDroneTextElement;
var hypnoDroneEventDivElement;

var readoutElement1;
var readoutElement2;
var readoutElement3;
var readoutElement4;
var readoutElement5;
var readoutElement6;
var readoutElement7;
var readoutElement8;
var readoutElementTime;

var mpdsDivElement;

var factoryRebootToolTipElement;
var havesterRebootToolTipElement;
var wireDroneRebootToolTipElement;
var farmRebootToolTipElement;
var batteryRebootToolTipElement;

var swarmSliderDivElement;
var clipCountCrunchedElement;
var autoTourneyStatusDivElement;
var autoTourneyControlElement;

var wireBuyerDivElement; 
var tournamentResultsTableElement;
var tournamentStuffElement;

var increaseMaxTrustDivElement;
var honorDivElement;
var drifterDivElement;
var battleCanvasDivElement;
var combatButtonDivElement;
var factoryUpgradeDisplayElement;
var droneUpgradeDisplayElement;
var btnIncreaseMaxTrustElement;
var btnMakerProbeElement;
var hazardBodyCountElement;
var probesLostHazardsDisplayElement;
var driftBodyCountElement;
var combatBodyCountElement;
var prestigeDivElement;
var btnMakePaperclipElement;
var btnBuyWireElement;
var btnMakeClipperElement;
var btnExpandMarketingElement;
var btnLowerPriceElement;
var btnAddProcElement;
var btnAddMemElement;
var btnNewTournamentElement;
var btnImproveInvestmentsElement;
var investmentEngineElement;
var investmentEngineUpgradeElement;
var strategyEngineElement;
var tournamentManagementElement;
var megaClipperDivElement;
var btnMakeMegaClipperElement;
var autoClipperDivElement;
var revPerSecDivElement;
var compDivElement;
var creativityDivElement;
var projectsDivElement;
var businessDivElement;
var manufacturingDivElement;
var trustDivElement;
var creationDivElement;
var factoryDivElement;
var wireProductionDivElement;
var wireTransDivElement;
var harvesterDivElement;
var wireDroneDivElement;
var tothDivElement;
var spaceDivElement;
var factoryDivSpaceElement;
var droneDivSpaceElement;
var probeDesignDivElement;
var increaseProbeTrustDivElement;
var qComputingElement;
var btnMakeFactoryElement;
var btnHarvesterRebootElement;
var btnWireDroneRebootElement;
var btnFactoryRebootElement;

var probeTrustUsedDisplayElement;
var btnIncreaseProbeTrustElement;
var btnRaiseProbeSpeedElement;
var btnLowerProbeSpeedElement;
var btnRaiseProbeNavElement;
var btnLowerProbeNavElement;
var btnRaiseProbeRepElement;
var btnLowerProbeRepElement;
var btnRaiseProbeHazElement;
var btnLowerProbeHazElement;
var btnRaiseProbeFacElement;
var btnLowerProbeFacElement;
var btnRaiseProbeHarvElement;
var btnLowerProbeHarvElement;
var btnRaiseProbeWireElement;
var btnLowerProbeWireElement;
var btnRaiseProbeCombatElement;
var btnLowerProbeCombatElement;

var coverElement;

var unusedClipsDisplayElement;
var transWireElement;
var nanoWireElement;
var clipsElement;
var unsoldClipsElement;

var stockSymbolElements = [];
var stockAmountElements = [];
var stockPriceElements = [];
var stockTotalElements = [];
var stockProfitElements = [];

var tourneyResultsElements = [];

// Cache

cacheDOMElements();

// Wire --------------------------------------------------------

function adjustWirePrice(){
    
    wirePriceTimer++;
    
    if (wirePriceTimer>250 && wireBasePrice>15){
        wireBasePrice = wireBasePrice - (wireBasePrice/1000);
        wirePriceTimer = 0;
    }
    
    if (Math.random() < .015) {
        wirePriceCounter++;
        var wireAdjust = 6*(Math.sin(wirePriceCounter));
        wireCost = Math.ceil(wireBasePrice + wireAdjust);
        wireCostElement.innerHTML = wireCost;
        }
}

function toggleWireBuyer(){
    if (wireBuyerStatus==1){
        wireBuyerStatus=0;
        wireBuyerStatusElement.innerHTML = "OFF";
    } else {
        wireBuyerStatus=1;
        wireBuyerStatusElement.innerHTML = "ON";
    }
}

function buyWire(){
    if(funds >= wireCost){
        wirePriceTimer = 0;
        wire = wire + wireSupply;
        funds = funds - wireCost;
        wirePurchase = wirePurchase + 1;
        wireBasePrice = wireBasePrice + .05;
        wireElement.innerHTML = formatWithCommas(Math.floor(wire));
        fundsElement.innerHTML = formatWithCommas(funds, 2);
    }
}

// QCHIPS -----------------------------------------------------------

var qChips = [];
var qChipsElements = [];

var qChip0 = {
    waveSeed: .1,
    value: 0,
    active: 0,
}

qChips.push(qChip0);
qChipsElements.push(document.getElementById("qChip0"));

var qChip1 = {
    waveSeed: .2,
    value: 0,
    active: 0,
}

qChips.push(qChip1);
qChipsElements.push(document.getElementById("qChip1"));

var qChip2 = {
    waveSeed: .3,
    value: 0,
    active: 0,    
}

qChips.push(qChip2);
qChipsElements.push(document.getElementById("qChip2"));

var qChip3 = {
    waveSeed: .4,
    value: 0,
    active: 0,    
}

qChips.push(qChip3);
qChipsElements.push(document.getElementById("qChip3"));

var qChip4 = {
    waveSeed: .5,
    value: 0,
    active: 0,    
}

qChips.push(qChip4);
qChipsElements.push(document.getElementById("qChip4"));

var qChip5 = {
    waveSeed: .6,
    value: 0,
    active: 0,    
}

qChips.push(qChip5);
qChipsElements.push(document.getElementById("qChip5"));

var qChip6 = {
    waveSeed: .7,
    value: 0,
    active: 0,    
}

qChips.push(qChip6);
qChipsElements.push(document.getElementById("qChip6"));

var qChip7 = {
    waveSeed: .8,
    value: 0,
    active: 0,    
}

qChips.push(qChip7);
qChipsElements.push(document.getElementById("qChip7"));

var qChip8 = {
    waveSeed: .9,
    value: 0,
    active: 0,    
}

qChips.push(qChip8);
qChipsElements.push(document.getElementById("qChip8"));

var qChip9 = {
    waveSeed: 1,
    value: 0,
    active: 0,    
}

qChips.push(qChip9);
qChipsElements.push(document.getElementById("qChip9"));

function quantumCompute(){
    qClock = qClock+.01;
    for (var i = 0; i<qChips.length; i++){
        qChips[i].value = Math.sin(qClock*qChips[i].waveSeed*qChips[i].active);
        qChipsElements[i].style.opacity=qChips[i].value; 
    }
}

function qComp(){
    
    qFade = 1;
    
    var q = 0;
    
    
    if (qChips[0].active == 0){
        qCompDisplayElement.innerHTML = "Need Photonic Chips";   
    } else {
    for (var i = 0; i<qChips.length; i++){
        q = q+qChips[i].value;
        }
        
        var qq = Math.ceil(q*360);
        var buffer = (memory*1000) - standardOps;
        var damper = (tempOps/100)+5;
        
        if (qq>buffer) {
            tempOps = tempOps + Math.ceil(qq/damper) - buffer;
            qq = buffer;
            opFade = .01;
            opFadeTimer = 0;
            }
        
        standardOps = standardOps + qq;
        qCompDisplayElement.innerHTML = "qOps: " + formatWithCommas(Math.ceil(q*360));
    }
    
}



function manageProjects(){
    
    for(var i = 0; i < projects.length; i++){
        if (projects[i].trigger() && (projects[i].uses > 0)){
            displayProjects(projects[i]);
            projects[i].uses = projects[i].uses - 1;
            activeProjects.push(projects[i]);
        }
    }
        
        
    for(var i = 0; i < activeProjects.length; i++){
        if (activeProjects[i].cost()){
            activeProjects[i].element.disabled = false;
        } else {
            activeProjects[i].element.disabled = true;
        }   
    }
}


function displayProjects(project){
    
    project.element = document.createElement("button");
project.element.setAttribute("id", project.id);
    
project.element.onclick = function(){project.effect()};
    
project.element.setAttribute("class", "projectButton");
    projectListTopElement.appendChild(project.element, projectListTopElement.firstChild);
    
    var span = document.createElement("span");
    span.style.fontWeight = "bold";
project.element.appendChild(span);
    
    var title = document.createTextNode(project.title);
    span.appendChild(title);    
    
    var cost = document.createTextNode(project.priceTag);
project.element.appendChild(cost);
    
    var div = document.createElement("div");
project.element.appendChild(div);
    
    var description = document.createTextNode(project.description);
    project.element.appendChild(description);
    
    blink(project.element);
    
}

//  HYPNODRONE EVENT ----------------------------------------------------------------

hypnoDroneEventDivElement.style.display = "none"; 
var longBlinkCounter = 0;

function longBlink(element){
 
    { 
        var handle = setInterval(function () { longToggleVisibility(element)}, 32);    
    }
    
    function longToggleVisibility(element){
    longBlinkCounter++;    
        
    if (longBlinkCounter > 5 && longBlinkCounter < 10){
        hypnoDroneTextElement.innerHTML="Release"; 
        }    
    
    if (longBlinkCounter > 30 && longBlinkCounter < 40){
        hypnoDroneTextElement.innerHTML="<br /><br /><br />Release"; 
        }   
        
    if (longBlinkCounter > 45 && longBlinkCounter < 55){
        hypnoDroneTextElement.innerHTML="<br />Release";
        }       
        
     if (longBlinkCounter > 55){
        hypnoDroneTextElement.innerHTML="Release<br/>the<br/>Hypno<br/>Drones";
        }       
        
    if (longBlinkCounter >= 120){
        //console.log("weed wizzard");
        clearInterval(handle);
        longBlinkCounter = 0;
        element.style.display = "none";
    } else {
        if (element.style.display != ""){
            element.style.display = "";
        } else {
            element.style.display = "none";    
        }
      }   
    }
        
    }

function hypnoDroneEvent(){
    hypnoDroneTextElement.innerHTML="Release";
    longBlink(hypnoDroneEventDivElement);
}     


//  MESSAGES ------------------------------------------------------------------------


function displayMessage(msg){
    readoutElement8.innerHTML = readoutElement7.innerHTML;
    readoutElement7.innerHTML = readoutElement6.innerHTML;
    readoutElement6.innerHTML = readoutElement5.innerHTML;
    readoutElement5.innerHTML = readoutElement4.innerHTML;
    readoutElement4.innerHTML = readoutElement3.innerHTML;
    readoutElement3.innerHTML = readoutElement2.innerHTML;
    readoutElement2.innerHTML = readoutElement1.innerHTML;
    readoutElement1.innerHTML = msg;
}


// BLINK

function blink(element){

    { 
        var handle = setInterval(function () { toggleVisibility(element)}, 30);    
    }
    
    function toggleVisibility(element){
    blinkCounter = blinkCounter+1;    
    
    if (blinkCounter >= 12){
        clearInterval(handle);
        blinkCounter = 0;
        element.style.visibility = "visible";
    } else {
        if (element.style.visibility != "hidden"){
        element.style.visibility = "hidden";
        } else {
        element.style.visibility = "visible";    
        }
      }   
    }
        
    }



function buttonUpdate(){
    
    if (swarmFlag == 0){        
        swarmEngineElement.style.display="none";
        swarmGiftDivElement.style.display="none";
        } else {
        swarmEngineElement.style.display="";
        swarmGiftDivElement.style.display="";    
        }    
    
    if (project127.flag == 1 && spaceFlag == 0){        
        powerDivElement.style.display="";
        } else {
        powerDivElement.style.display="none";      
        }  
    
    if (spaceFlag==0){
        mpdsDivElement.style.display="none";
    } else if (spaceFlag==1) {
        mpdsDivElement.style.display="";
    }
   
    factoryRebootToolTipElement.innerHTML = "+" + spellf(factoryBill)+" clips";
    havesterRebootToolTipElement.innerHTML = "+" + spellf(harvesterBill)+" clips";
    wireDroneRebootToolTipElement.innerHTML = "+" + spellf(wireDroneBill)+" clips";   
    farmRebootToolTipElement.innerHTML = "+" + spellf(farmBill)+" clips";
    batteryRebootToolTipElement.innerHTML = "+" + spellf(batteryBill)+" clips";
    
    
    if (swarmFlag == 1){
        swarmSliderDivElement.style.display="";
    } else {
        swarmSliderDivElement.style.display="none";
    }
    
    clipCountCrunchedElement.innerHTML = spellf(Math.round(clips));
    
    if (autoTourneyFlag==1) {
        autoTourneyStatusDivElement.style.display="";
        autoTourneyControlElement.style.display="";
        } else {
        autoTourneyStatusDivElement.style.display="none";
        autoTourneyControlElement.style.display="none";   
        }

        qCompDisplayElement.style.opacity = qFade;
        qFade = qFade - .001;
        
    if (wireBuyerFlag==1) {
        wireBuyerDivElement.style.display="";
        } else {
        wireBuyerDivElement.style.display="none";    
        }
        
    if (resultsFlag == 1 && autoTourneyFlag == 1 && autoTourneyStatus ==1 && tournamentResultsTableElement.style.display == "") {
        resultsTimer++;
        
        if (resultsTimer>=300 && operations>=tourneyCost){
            newTourney();
            runTourney();
            resultsTimer = 0;
            }
        }    
    
    
    tournamentStuffElement.onmouseover = function() {revealGrid()};
    tournamentStuffElement.onmouseout = function() {revealResults()};    
    
    if (project121.flag == 0){
            increaseMaxTrustDivElement.style.display="none";
            honorDivElement.style.display="none";
        } else {
            increaseMaxTrustDivElement.style.display="";
            honorDivElement.style.display="";
        }
        
    if (battleFlag == 0){
            drifterDivElement.style.display="none";
        } else {
            drifterDivElement.style.display="";
        }     
        
    if (battleFlag == 0){
            battleCanvasDivElement.style.display="none";
        } else {
            battleCanvasDivElement.style.display="";
        }    
        
    if (project131.flag == 0){
        combatButtonDivElement.style.display = "none";
        } else {
        combatButtonDivElement.style.display = "";    
        }     
        
    if (maxFactoryLevel>=50 || project45.flag == 0){
        factoryUpgradeDisplayElement.style.display = "none";
        } else {
        factoryUpgradeDisplayElement.style.display = "";    
        }
        
     if (maxDroneLevel>=50000){   
        droneUpgradeDisplayElement.style.display = "none";
        }
        
    if (honor<maxTrustCost){btnIncreaseMaxTrustElement.disabled = true;
                } else {
                btnIncreaseMaxTrustElement.disabled = false;    
                }
         
    if (unusedClips<probeCost){btnMakerProbeElement.disabled = true;
                } else {
                btnMakerProbeElement.disabled = false;    
                }    
        
    if (probesLostHaz<1) {hazardBodyCountElement.style.display = "none";
                } else {
                hazardBodyCountElement.style.display = "";
                    
                probesLostHazardsDisplayElement.innerHTML = spellf(probesLostHaz);
                    
                }    
        
    if (probesLostDrift<1) {driftBodyCountElement.style.display = "none";
                } else {
                driftBodyCountElement.style.display = "";
                }     
        
    if (probesLostCombat<1) {combatBodyCountElement.style.display = "none";
                } else {
                combatBodyCountElement.style.display = "";
                }     

    if (prestigeU<1 && prestigeS<1) {prestigeDivElement.style.display = "none";
                } else {
                prestigeDivElement.style.display = ""; 
                }  
        
    if (wire<1){btnMakePaperclipElement.disabled = true;
                } else {
                btnMakePaperclipElement.disabled = false;    
                }
    if (funds<wireCost){btnBuyWireElement.disabled = true;
                } else {
                btnBuyWireElement.disabled = false;    
                }
    if (funds<clipperCost){btnMakeClipperElement.disabled = true;
                } else {
                btnMakeClipperElement.disabled = false;    
                }   
    if (funds<adCost){btnExpandMarketingElement.disabled = true;
                } else {
                btnExpandMarketingElement.disabled = false;    
                }    
    if (margin<=.01){btnLowerPriceElement.disabled = true;
                } else {
                btnLowerPriceElement.disabled = false;    
                } 
        
    if (trust<=processors+memory && swarmGifts <= 0){
                btnAddProcElement.disabled = true;
                btnAddMemElement.disabled = true;
                } else {
                btnAddProcElement.disabled = false;
                btnAddMemElement.disabled = false;    
                }
    if (operations>=tourneyCost && tourneyInProg == 0){
                btnNewTournamentElement.disabled = false;
                } else {
                btnNewTournamentElement.disabled = true;    
                }
    if (yomi<investUpgradeCost){
                btnImproveInvestmentsElement.disabled = true;
                } else {
                btnImproveInvestmentsElement.disabled = false;   
                }  
    if (investmentEngineFlag == 0){
                
                investmentEngineElement.style.display="none";
                investmentEngineUpgradeElement.style.display="none";
                } else {
                    
                investmentEngineElement.style.display="";
                investmentEngineUpgradeElement.style.display="";        
                }    

    if (strategyEngineFlag == 0){
                
                strategyEngineElement.style.display="none";
                tournamentManagementElement.style.display="none";
                } else {
                    
                strategyEngineElement.style.display="";
                tournamentManagementElement.style.display="";        
                }     
        
    if (megaClipperFlag == 0){
                
                megaClipperDivElement.style.display="none";
                } else {
                megaClipperDivElement.style.display="";      
                } 
        
        if (funds < megaClipperCost) { btnMakeMegaClipperElement.disabled = true;
                } else {
                btnMakeMegaClipperElement.disabled = false;    
                }   
        
    if (autoClipperFlag === 0){
                
                autoClipperDivElement.style.display="none";
                } else {
                autoClipperDivElement.style.display="";      
                } 
        
                if (funds>=5) {
                    autoClipperFlag = 1;
                }
        
    if (revPerSecFlag === 0){
                
                revPerSecDivElement.style.display="none";
                } else {
                revPerSecDivElement.style.display="";      
                }     
        
        
    if (compFlag === 0){
                
                compDivElement.style.display="none";
                } else {
                compDivElement.style.display="";      
                }  
        
        
    if (creativityOn === 0){
                creativityDivElement.style.display="none";
                } else {
                creativityDivElement.style.display="";    
    }    
        
    if (projectsFlag === 0){
                
                projectsDivElement.style.display="none";
                } else {
                projectsDivElement.style.display="";      
                }      

    if (humanFlag === 0){
                
                businessDivElement.style.display="none";
                manufacturingDivElement.style.display="none";
                trustDivElement.style.display="none";
                investmentEngineFlag = 0;
                wireBuyerFlag = 0;
                creationDivElement.style.display="";
                } else {
                businessDivElement.style.display="";
                manufacturingDivElement.style.display="";
                trustDivElement.style.display="";
                creationDivElement.style.display="none";    
                }  
        
    if (factoryFlag === 0){
                
                factoryDivElement.style.display="none";
                } else {
                factoryDivElement.style.display="";      
                }      
       
    if (wireProductionFlag === 0){
                
                wireProductionDivElement.style.display="none";
                } else {
                wireProductionDivElement.style.display="";
                wireTransDivElement.style.display="none";    
                } 
        
    if (harvesterFlag === 0){
                
                harvesterDivElement.style.display="none";
                } else {
                harvesterDivElement.style.display="";      
                }  
        
    if (wireDroneFlag === 0){
                
                wireDroneDivElement.style.display="none";
                } else {
                wireDroneDivElement.style.display="";      
                }  
        
    if (tothFlag === 0){
                
                tothDivElement.style.display="none";
                } else {
                tothDivElement.style.display="";      
                }    
        
    if (spaceFlag === 0){
                spaceDivElement.style.display="none";
                factoryDivSpaceElement.style.display="none";
                droneDivSpaceElement.style.display="none";
                probeDesignDivElement.style.display = "none";
                increaseProbeTrustDivElement.style.display = "none";   
                } else {
                spaceDivElement.style.display=""; 
                factoryDivSpaceElement.style.display = "";
                droneDivSpaceElement.style.display="";
                probeDesignDivElement.style.display="";
                increaseProbeTrustDivElement.style.display="";    
                factoryDivElement.style.display="none";
                harvesterDivElement.style.display="none"; 
                wireDroneDivElement.style.display="none";         
                }  
        
    if (qFlag === 0){
                qComputingElement.style.display="none";     
                } else {
                qComputingElement.style.display="";    
                }    
     
        
        if (unusedClips < factoryCost) {btnMakeFactoryElement.disabled = true;
                } else {
                btnMakeFactoryElement.disabled = false;    
                }     
         
        
        if (harvesterLevel === 0) {btnHarvesterRebootElement.disabled = true;
                } else {
                btnHarvesterRebootElement.disabled = false;    
                }
        
        if (wireDroneLevel === 0) {btnWireDroneRebootElement.disabled = true;
                } else {
                btnWireDroneRebootElement.disabled = false;    
                }   
        
        if (factoryLevel === 0) {btnFactoryRebootElement.disabled = true;
                } else {
                btnFactoryRebootElement.disabled = false;    
                }      
        
        
    // PROBE DESIGN    

    probeUsedTrust = (probeSpeed+probeNav+probeRep+probeHaz+probeFac+probeHarv+probeWire+probeCombat);    
        
    probeTrustUsedDisplayElement.innerHTML = probeUsedTrust;    
        
        
    if (yomi < probeTrustCost || probeTrust >= maxTrust) {btnIncreaseProbeTrustElement.disabled = true;
                } else {btnIncreaseProbeTrustElement.disabled = false;}  
        
    if (probeTrust - probeUsedTrust < 1) {btnRaiseProbeSpeedElement.disabled = true;
                } else {btnRaiseProbeSpeedElement.disabled = false;}    
        
    if (probeSpeed < 1) {btnLowerProbeSpeedElement.disabled = true;
                } else {btnLowerProbeSpeedElement.disabled = false;}      
        
    if (probeTrust - probeUsedTrust < 1) {btnRaiseProbeNavElement.disabled = true;
                } else {btnRaiseProbeNavElement.disabled = false;}  
        
    if (probeNav < 1) {btnLowerProbeNavElement.disabled = true;
                } else {btnLowerProbeNavElement.disabled = false;}     

    if (probeTrust - probeUsedTrust < 1) {btnRaiseProbeRepElement.disabled = true;
                } else {btnRaiseProbeRepElement.disabled = false;} 
        
    if (probeRep < 1) {btnLowerProbeRepElement.disabled = true;
                } else {btnLowerProbeRepElement.disabled = false;}     
        
    if (probeTrust - probeUsedTrust < 1) {btnRaiseProbeHazElement.disabled = true;
                } else {btnRaiseProbeHazElement.disabled = false;}
        
    if (probeHaz < 1) {btnLowerProbeHaz.disabled = true;
                } else {btnLowerProbeHaz.disabled = false;}     
        
    if (probeTrust - probeUsedTrust < 1) {btnRaiseProbeFacElement.disabled = true;
                } else {btnRaiseProbeFacElement.disabled = false;}   
        
    if (probeFac < 1) {btnLowerProbeFacElement.disabled = true;
                } else {btnLowerProbeFacElement.disabled = false;}      
        
    if (probeTrust - probeUsedTrust < 1) {btnRaiseProbeHarvElement.disabled = true;
                } else {btnRaiseProbeHarvElement.disabled = false;}  
        
    if (probeHarv < 1) {btnLowerProbeHarvElement.disabled = true;
                } else {btnLowerProbeHarvElement.disabled = false;}    
        
    if (probeTrust - probeUsedTrust < 1) {btnRaiseProbeWireElement.disabled = true;
                } else {btnRaiseProbeWireElement.disabled = false;}   

    if (probeWire < 1) {btnLowerProbeWireElement.disabled = true;
                } else {btnLowerProbeWireElement.disabled = false;} 
        
    if (probeTrust - probeUsedTrust < 1) {btnRaiseProbeCombatElement.disabled = true;
                } else {btnRaiseProbeCombatElement.disabled = false;}
        
    if (probeCombat < 1) {btnLowerProbeCombatElement.disabled = true;
                } else {btnLowerProbeCombatElement.disabled = false;}    

     coverElement.style.display="none";
}



//----------INVESTMENTS----------------------------------------------------------------

var stocks = [];
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var portfolioSize = 0;
var stockID = 0;
var secTotal = 0;
var portTotal = 0;
var sellDelay = 0;
var riskiness = 5;
var maxPort = 5;
var m = 0;
var investLevel = 0;
var investUpgradeCost = 100;
var stockGainThreshold = .5;
var ledger = 0;
var stockReportCounter = 0;

function investUpgrade(){
    yomi = yomi - investUpgradeCost;
    investLevel++;
    investmentLevelElement.innerHTML=investLevel;
    stockGainThreshold = stockGainThreshold + .01;
    investUpgradeCost = Math.floor(Math.pow(investLevel+1, Math.E)*100);
    investUpgradeCostElement.innerHTML = formatWithCommas(investUpgradeCost);
    yomiDisplayElement.innerHTML = formatWithCommas(yomi);
    displayMessage("Investment engine upgraded, expected profit/loss ratio now "+stockGainThreshold);
}


function investDeposit(){
    ledger = ledger - Math.floor(funds);
    bankroll = Math.floor(bankroll + funds);
    funds = 0;
    investmentBankrollElement.innerHTML = formatWithCommas(bankroll);
    fundsElement.innerHTML = formatWithCommas(funds,2);
    portValueElement.innerHTML = formatWithCommas(portTotal);
}

function investWithdraw(){
    ledger = ledger + bankroll;
    funds = funds + bankroll;
    bankroll = 0;
    investmentBankrollElement.innerHTML = formatWithCommas(bankroll);
    fundsElement.innerHTML = formatWithCommas(funds,2);
    portValueElement.innerHTML = formatWithCommas(portTotal);
}

function stockShop(){
    var budget = Math.ceil(portTotal/riskiness);
    var r = 11 - riskiness;
    var reserves = Math.ceil(portTotal/r);
    if (riskiness==1){
        reserves = 0;
    }

    if ((bankroll-budget)<reserves && riskiness == 1 && bankroll >(portTotal/10)){
        budget = bankroll;
        } else if ((bankroll-budget)<reserves && riskiness == 1){
        budget = 0;    
        } else if ((bankroll-budget)<reserves){
        budget = bankroll - reserves;    
        }
    
    if (portfolioSize < maxPort && bankroll >= 5 && budget >= 1 && bankroll - budget >= reserves){
        if (Math.random() < .25){
            createStock(budget);
        }
    }   
}

function createStock(dollars){
    stockID++;
    var sym = generateSymbol();
    var roll = Math.random();
    if (roll>.99){
      var pri = Math.ceil(Math.random()*3000);  
    } else if (roll>.85){
      var pri = Math.ceil(Math.random()*500);  
    } else if (roll>.60){
      var pri = Math.ceil(Math.random()*150);  
    } else if (roll>.20){
      var pri = Math.ceil(Math.random()*50);  
    } else {
      var pri = Math.ceil(Math.random()*15);  
    }
    
    if (pri>dollars){
        pri = Math.ceil(dollars*roll);
    }
    
    
    var amt = Math.floor(dollars/pri);
    if (amt>1000000){
        amt = 1000000;
    }
  
    var newStock = {
        id: stockID,
        symbol: sym,
        price: pri,
        amount: amt,
        total: pri * amt,
        profit: 0,
        age: 0,
        }
    
    stocks.push(newStock);
    portfolioSize = stocks.length;
    bankroll = bankroll - (pri*amt);
    investmentBankrollElement.innerHTML = formatWithCommas(bankroll);
    secValueElement.innerHTML = formatWithCommas(secTotal);
    portValueElement.innerHTML = formatWithCommas(portTotal);
    
}

function sellStock(){
    
    bankroll = bankroll + stocks[0].total;
    investmentBankrollElement.innerHTML = formatWithCommas(bankroll);
    secValueElement.innerHTML = formatWithCommas(secTotal);
    portValueElement.innerHTML = formatWithCommas(portTotal);
    stocks.splice(0, 1);
    portfolioSize = stocks.length;   
    }    
    

function generateSymbol(){
    var ltrNum = 0;
    var x = Math.random();
    if (x<=.01){
        ltrNum = 1;
        } else if (x<=.1) {
        ltrNum = 2;    
        } else if (x<=.4) {
        ltrNum = 3;    
        } else {
        ltrNum = 4;
        }
    
    var y = Math.floor(Math.random()*26);
    var name = alphabet[y];
    
    for(var i=1; i<ltrNum; i++){
        var z = Math.floor(Math.random()*26);
        name = name.concat(alphabet[z]);     
    }
    return name;
}

function updateStocks(){
    for (var i = 0; i<portfolioSize; i++){
        
    stocks[i].age = stocks[i].age + 1;    
      if (Math.random()<.6){  
        var gain = true;
        if (Math.random()>stockGainThreshold){
            gain = false;                 
            }
        
        var currentPrice = stocks[i].price;
        var delta = Math.ceil((Math.random()*currentPrice)/(4*riskiness));
        
        if(gain){
        stocks[i].price = stocks[i].price + delta;
        } else {
        stocks[i].price = stocks[i].price - delta;    
        }
          
        if (stocks[i].price == 0 && Math.random()>.24){
            stocks[i].price = 1;
        }  
        
        stocks[i].total = stocks[i].price * stocks[i].amount;
        
        if (gain){
        stocks[i].profit = stocks[i].profit + (delta* stocks[i].amount);    
        } else {
        stocks[i].profit = stocks[i].profit - (delta* stocks[i].amount);    
        } 
      }
    }
}

// Stock List Display Routine
window.setInterval(function(){
    
    if (investStratElement.value=="low"){
        riskiness = 7;
    } else if (investStratElement.value=="med"){
        riskiness = 5;
    } else {
        riskiness = 1;
    }
    
    m = 0;
    
    for (var i=0; i<portfolioSize; i++){
        m = m + stocks[i].total;
    }
    
    secTotal = m;
    
    portTotal = bankroll + secTotal;
    
    secValueElement.innerHTML = formatWithCommas(secTotal);
    portValueElement.innerHTML = formatWithCommas(portTotal);
    
    portfolioSize = stocks.length; 
    
    for (var i = 1; i<=portfolioSize; i++){ //m@ todo make this into an array ok?
        var n = i.toString();
        var s = i-1;
        stockSymbolElements[i-1].innerHTML=stocks[s].symbol;
        stockAmountElements[i-1].innerHTML=Math.ceil(stocks[s].amount);
        stockPriceElements[i-1].innerHTML=Math.ceil(stocks[s].price);
        stockTotalElements[i-1].innerHTML=Math.ceil(stocks[s].total);
        stockProfitElements[i-1].innerHTML=Math.ceil(stocks[s].profit);
    }    
        
    var firstBlankSlot = portfolioSize + 1;    
    
// for(var i = firstBlankSlot; i <= 5; i++){   <------ Frank Fix

    for(var i = firstBlankSlot; i < 5; i++){
        stockSymbolElements[i].innerHTML="&nbsp";
        stockAmountElements[i].innerHTML="&nbsp";
        stockPriceElements[i].innerHTML="&nbsp";
        stockTotalElements[i].innerHTML="&nbsp";
        stockProfitElements[i].innerHTML="&nbsp";
    }
}, 100);

window.setInterval(function(){
    if (humanFlag == 1){    
        stockShop();
    }    
}, 1000);

window.setInterval(function(){
    sellDelay = sellDelay+1;    
        
    if (portfolioSize>0 && sellDelay >= 5 && Math.random()<=.3 && humanFlag == 1){ 
        sellStock();
        sellDelay = 0;
        }

    if (portfolioSize>0 && humanFlag == 1){
        updateStocks();  
        }
    
}, 2500);

//-------------------STRATEGY-----------------------------------------------------
var tourneyCost = 1000;
var tourneyLvl = 1;
var choiceANames = ["cooperate", "swerve", "macro", "fight", "bet", "raise_price", "opera", "go", "heads", "particle", "discrete", "peace", "search", "lead", "accept", "accept", "attack"]; 
var choiceBNames = ["defect", "straight", "micro", "back_down", "fold", "lower_price", "football", "stay", "tails", "wave", "continuous", "war", "evaluate", "follow", "reject", "deny", "decay"];
var stratCounter = 0;
var roundNum = 0;
var hMove = 1;
var vMove = 1;
var hMovePrev = 1;
var vMovePrev = 1;
var aa = 0;
var ab = 0;
var ba = 0;
var bb = 0;
var rounds = 0;
var currentRound = 0;
var rCounter = 0;
var tourneyInProg = 0;
var winnerPtr = 0;
var placeScore = 0;
var showScore = 0;
var high = 0;
var pick = 10;
var yomi = 0;
var yomiBoost = 1;

var allStrats = [];
var strats = [];

var resultsTimer = 0;
var results = [];
var resultsFlag = 0;


var payoffGrid = {
    valueAA:0,
    valueAB:0,
    valueBA:0,
    valueBB:0,
}

var stratRandom = {
    name: "RANDOM",
    active: 1,
    currentScore: 0,
    currentPos: 1,
    pickMove: function() {
        var r = Math.random();
        if (r<.5){
        return 1;    
        } else {
        return 2;    
        }
    }
    
}

allStrats.push(stratRandom);
strats.push(stratRandom);

var stratA100 = {
    name: "A100",
    active: 0,
    currentScore: 0,
    currentPos: 1,
    pickMove: function() {
        return 1;    
    }
    
}

allStrats.push(stratA100);

var stratB100 = {
    name: "B100",
    active: 0,
    currentScore: 0,
    currentPos: 1,
    pickMove: function() {
        return 2;
    }
}

allStrats.push(stratB100);

var stratGreedy = {
    name: "GREEDY",
    active: 0,
    currentScore: 0,
    currentPos: 1,
    pickMove: function() {
       var x = findBiggestPayoff();
       if (x<3){
           return 1;
       } else {
           return 2;
       }
    }
}

allStrats.push(stratGreedy);

var stratGenerous = {
    name: "GENEROUS",
    active: 0,
    currentScore: 0,
    currentPos: 1,
    pickMove: function() {
        var x = findBiggestPayoff();
        if (x == 1){
            return 1;    
        } else if (x == 3){
            return 1;    
        } else {
            return 2;
        }
    }
}

allStrats.push(stratGenerous);

var stratMinimax = {
    name: "MINIMAX",
    active: 0,
    currentScore: 0,
    currentPos: 1,
    pickMove: function() {
        var x = findBiggestPayoff();
        if (x == 1){
            return 2;    
        } else if (x == 3){
            return 2;    
        } else {
            return 1;
        }
    }
}

allStrats.push(stratMinimax);

var stratTitfortat = {
    name: "TIT FOR TAT",
    active: 0,
    currentScore: 0,
    currentPos: 1,
    pickMove: function() {
        if (this.currentPos == 1){
            w = vMovePrev;
            return w;
        } else {
            w = hMovePrev;
            return w;
        }
  
    }
}

allStrats.push(stratTitfortat);

var stratBeatlast = {
    name: "BEAT LAST",
    active: 0,
    currentScore: 0,
    currentPos: 1,
    pickMove: function() {
        var w = whatBeatsLast(this.currentPos);
        return w;
    }
}

allStrats.push(stratBeatlast);

var hStrat = strats[0];
var vStrat = strats[0];

btnRunTournamentElement.disabled = true;

function findBiggestPayoff(){
    if (aa>=ab && aa>=ba && aa>=bb){
        return 1;
    } else if (ab>=aa && ab>=ba && ab>=bb){
        return 2; 
    } else if (ba>=aa && ba>=ab && ba>=bb){
        return 3;
    } else {
        return 4;   
    }
}

function whatBeatsLast(myPos){
    var oppsPos = 1;
    if (myPos == 1){
        oppsPos = 2;
    } else {
        oppsPos = 1;
    }
    if (oppsPos == 1 && hMovePrev == 1){
        if (aa>ba){
            return 1;
        } else {
            return 2;
        }

        } else if (oppsPos == 1 && hMovePrev == 2){
            if (ab>bb){
            return 1;           
            } else {
            return 2;    
            }
               
        } else if (oppsPos == 2 && vMovePrev == 1){
            if (aa>ba){
            return 1;
        } else {
            return 2;
        }
            
        } else {
            if (ab>bb){
            return 1;           
            } else {
            return 2;    
            }
            
        }
        
    }
    

function pickStrats(roundNum) {
    if (roundNum < strats.length) {
        h = 0;
        v = roundNum;
    } else {
        stratCounter++;
        if (stratCounter >= strats.length) {
            stratCounter = stratCounter-strats.length;    
            }
        h = Math.floor(roundNum/strats.length);
        v = stratCounter;
    }
    
    vStrat = strats[v];
    hStrat = strats[h];
    
    strats[h].currentPos = 1;
    strats[v].currentPos = 2;
    
    vertStratElement.innerHTML = vStrat.name;
    horizStratElement.innerHTML = hStrat.name;
    
}

function generateGrid(){
    payoffGrid.valueAA = Math.ceil(Math.random()*10);
    payoffGrid.valueAB = Math.ceil(Math.random()*10);
    payoffGrid.valueBA = Math.ceil(Math.random()*10);
    payoffGrid.valueBB = Math.ceil(Math.random()*10);
    
    aa = payoffGrid.valueAA;
    ab = payoffGrid.valueAB;
    ba = payoffGrid.valueBA;
    bb = payoffGrid.valueBB;
    
    var x = Math.floor(Math.random()*choiceANames.length);
    
    vLabelaElement.innerHTML = choiceANames[x];
    vLabelbElement.innerHTML = choiceBNames[x];
    hLabelaElement.innerHTML = choiceANames[x];
    hLabelbElement.innerHTML = choiceBNames[x];
    aaPayoffHElement.innerHTML = payoffGrid.valueAA;
    aaPayoffVElement.innerHTML = payoffGrid.valueAA;
    abPayoffHElement.innerHTML = payoffGrid.valueAB;
    abPayoffVElement.innerHTML = payoffGrid.valueBA;   
    baPayoffHElement.innerHTML = payoffGrid.valueBA;
    baPayoffVElement.innerHTML = payoffGrid.valueAB;   
    bbPayoffHElement.innerHTML = payoffGrid.valueBB;
    bbPayoffVElement.innerHTML = payoffGrid.valueBB;    
}


function toggleAutoTourney(){
    if (autoTourneyStatus==1){
        autoTourneyStatus=0;
        autoTourneyStatusElement.innerHTML = "OFF";
    } else {
        autoTourneyStatus=1;
        autoTourneyStatusElement.innerHTML = "ON";
    }
}


function newTourney(){
    
    resultsFlag = 0;
    
    tournamentTableElement.style.display = "";
    tournamentResultsTableElement.style.display = "none";
    
    high = 0;
    tourneyInProg = 1;
    currentRound = 0;
    rounds = strats.length * strats.length;
    for (i=0; i<strats.length; i++){
        strats[i].currentScore = 0;
    }
    stratCounter = 0;
    standardOps = standardOps - tourneyCost;
    tourneyLvl++;
    generateGrid();
    
    btnRunTournamentElement.disabled = false;
    vertStratElement.innerHTML = "&nbsp";
    horizStratElement.innerHTML = "&nbsp";
    tourneyDisplayElement.innerHTML = "Pick strategy, run tournament, gain yomi";
    
    
}

function runTourney(){
    btnRunTournamentElement.disabled = true;
    if (currentRound < rounds){
    round(currentRound);
    } else {
    tourneyInProg = 0;
    pickWinner();    
    calculatePlaceScore();
    calculateShowScore();    
    declareWinner();    
    }    
}



function pickWinner(){
    
    results = [];
    
    var temp = [];
    var tempHigh = 0;
    var tempWinnerPtr = 0;
    
    // 1. Make a temp copy of the strats array
    
    for(i=0; i<strats.length; i++){
        temp[i] = strats[i];
    }
    
    for(n=0; n<strats.length; n++){
        
        tempHigh = 0;
        tempWinnerPtr = 0;
    
            // 2. Find a high scoring strat in temp

            for(i=0; i<temp.length; i++){
                
                if (temp[i].currentScore > tempHigh){
                    tempWinnerPtr = i;
                    tempHigh = temp[i].currentScore;
                    }
            
                }    
         
            // 3. Move the high scoring strat to slot one in results 
        
                results.push(temp[tempWinnerPtr]);
                temp.splice(tempWinnerPtr, 1);         
    }
    
    
    for(i=0; i<strats.length; i++){
        if(strats[i].currentScore > high){
            winnerPtr = i;
            high = strats[i].currentScore;
        }   
    }
}


function calculatePlaceScore(){
    
    placeScore = 0;
    
    // 1. Find top non-winning score
    
    for (i=1; i<results.length; i++){
        if (results[i].currentScore < results[i-1].currentScore){
            placeScore = results[i].currentScore;
            break;
        }
        
    }
    
    
}

function calculateShowScore(){
    
    showScore = 0;
    
    // 1. Find top non-placing score
    
    for (i=1; i<results.length; i++){
        if (results[i].currentScore < placeScore){
            showScore = results[i].currentScore;
            break;
        }
        
    }
    
    
}




function declareWinner(){
    
    if (pick<10){
        
       var bB = 0;  
       var w = "strats";    
       var beatBoost = calculateStratsBeat()-1;
       if (beatBoost==1){
           w = "strat";
           }    
       if(beatBoost==0){
           bB=0;
           beatBoost=1;
          } else {
           bB=beatBoost;  
          }        
        
       tourneyReport("TOURNAMENT RESULTS (roll over for payoff grid)");
       yomi = yomi + strats[pick].currentScore * yomiBoost * beatBoost;
       yomiDisplayElement.innerHTML = formatWithCommas(yomi);
        
    if (milestoneFlag < 15){    
       
       displayMessage(strats[pick].name+" scored "+strats[pick].currentScore+" and beat "+bB+" "+w+". Yomi increased by "+strats[pick].currentScore * yomiBoost * beatBoost);
           
        }
        
        if (project128.flag == 1 && strats[winnerPtr].currentScore == strats[pick].currentScore) {
            yomi = yomi + 50000;
            
            if (milestoneFlag < 15){ 
                displayMessage("Selected strategy won the tournament (or tied for first). +50,000 yomi");
                }
            yomiDisplayElement.innerHTML = formatWithCommas(yomi);
            
            } else if (project128.flag == 1 && placeScore == strats[pick].currentScore) {
                yomi = yomi + 30000;
                if (milestoneFlag < 15){ 
                displayMessage("Selected strategy finished in (or tied for) second place. +30,000 yomi");
                }
                yomiDisplayElement.innerHTML = formatWithCommas(yomi);
                
            } else if (project128.flag == 1 && showScore == strats[pick].currentScore) {
                yomi = yomi + 20000;
                if (milestoneFlag < 15){ 
                displayMessage("Selected strategy finished in (or tied for) third place. +20,000 yomi");
                }
                yomiDisplayElement.innerHTML = formatWithCommas(yomi);
        
            } else {
        
            tourneyReport("TOURNAMENT RESULTS (roll over for grid)");
        
            }
    
    populateTourneyReport();
    displayTourneyReport();
   
    }
        
}

function calculateStratsBeat(){
    var sb = 0;
    for(i=0; i<results.length; i++){
        if (results[i].name == strats[pick].name){
            sb = results.length-i;
            return sb;
            }
    }
    
}
    
function populateTourneyReport(){  //m@ make results array
    
        for(i=0; i<results.length; i++){
            
            tourneyResultsElements[i].innerHTML=(i+1)+". "+results[i].name+": "+results[i].currentScore; 
            
        if (pick<10){    
            
        if (results[i].name == strats[pick].name) {
            tourneyResultsElements[i].style.fontWeight = "bold";    
            } else {
            tourneyResultsElements[i].style.fontWeight = "normal";       
            }   
            
        }    
    
        }
    
}

function displayTourneyReport(){
    
        resultsFlag = 1;
        
        vertStratElement.innerHTML = "&nbsp";
        horizStratElement.innerHTML = "&nbsp";
        tournamentTableElement.style.display = "none";
        tournamentResultsTableElement.style.display = "";
    
    
}

function tourneyReport($){
    tourneyDisplayElement.innerHTML = $;
}

function revealGrid(){
    
    if (resultsFlag == 1){
    resultsTimer = 0;    
    tournamentTableElement.style.display = "";
    tournamentResultsTableElement.style.display = "none";
    }     
}

function revealResults(){
    
    if (resultsFlag == 1){
    tournamentTableElement.style.display = "none";
    tournamentResultsTableElement.style.display = "";
    }
}


function calcPayoff(hm, vm){
    if (hm==1 && vm==1){
        
        payoffCellAAElement.style.backgroundColor = "LightGrey";
        
        strats[h].currentScore = strats[h].currentScore + payoffGrid.valueAA;
        strats[v].currentScore = strats[v].currentScore + payoffGrid.valueAA;  
          
    } else if (hm==1 && vm==2){
        
        payoffCellABElement.style.backgroundColor = "LightGrey";
        
        strats[h].currentScore = strats[h].currentScore + payoffGrid.valueAB;
        strats[v].currentScore = strats[v].currentScore + payoffGrid.valueBA; 
        
    } else if (hm==2 && vm==1){
        
        payoffCellBAElement.style.backgroundColor = "LightGrey";
        
        strats[h].currentScore = strats[h].currentScore + payoffGrid.valueBA;
        strats[v].currentScore = strats[v].currentScore + payoffGrid.valueAB;
        
    } else if (hm==2 && vm==2){
        
        payoffCellBBElement.style.backgroundColor = "LightGrey";
        
        strats[h].currentScore = strats[h].currentScore + payoffGrid.valueBB;
        strats[v].currentScore = strats[v].currentScore + payoffGrid.valueBB;
        
    }
    
}


function round(roundNum){
    roundSetup();
    roundLoop();
    
    function roundSetup(){
        rCounter = 0;
        pickStrats(roundNum);
        var $ = ("Round "+(roundNum+1));
        tourneyReport($); 
    }
    
    
    function roundLoop(){
    if (rCounter<10){
        runRound();
        setTimeout(function(){clearGrid();}, 50);
        } else {
        currentRound++;
        runTourney();    
        }
    }
    
    
    function clearGrid() {
        
        payoffCellAAElement.style.backgroundColor = "transparent";
        payoffCellABElement.style.backgroundColor = "transparent";
        payoffCellBAElement.style.backgroundColor = "transparent";
        payoffCellBBElement.style.backgroundColor = "transparent";
        
        
        setTimeout(function(){roundLoop();}, 50);
        
    }
    
    function runRound() { 
        
        rCounter++;
        
        hMovePrev = hMove;
        vMovePrev = vMove;
        hMove = hStrat.pickMove();
        vMove = vStrat.pickMove();
        
        calcPayoff(hMove, vMove);   
    }
    }
    
window.setInterval(function(){
    pick = stratPickerElement.value;
}, 100);


//--------------------------------------------------------------------------------


function clipClick(number){
    
    if (dismantle>=4){
        finalClips++;
        }   
    
    if(wire >= 1){
    if (number > wire) {
        number = wire;
        }    
        
    clips = clips + number;
    unsoldClips = unsoldClips + number;
    wire = wire - number;
    unusedClips = unusedClips + number;
    
    if(humanFlag==0){
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips);    
    }    
    
    if(humanFlag==0 && dismantle < 1){
        transWireElement.innerHTML = spellf(wire);    
        nanoWireElement.innerHTML = spellf(wire);        
    }    
        
    if (milestoneFlag < 15){
        clipsElement.innerHTML = formatWithCommas(Math.ceil(clips), 0);  //m@ todo fixed the thing that you fucked up where you made the tool tip of crunched not be in spelled numbers
        }    
        wireElement.innerHTML = formatWithCommas(wire);
        unsoldClipsElement.innerHTML = formatWithCommas(unsoldClips, 0);
    }
    
    if (dismantle>=4){
    transWireElement.innerHTML = formatWithCommas(wire);
    }
    
}
    
function makeClipper(){  
    if(funds >= clipperCost){ // thank you @luzi82
        clipmakerLevel = clipmakerLevel + 1;
        funds = funds - clipperCost;
        clipmakerLevel2Element.innerHTML = clipmakerLevel;
    }
    
    clipperCost = (Math.pow(1.1,clipmakerLevel)+5);
    clipperCostElement.innerHTML = formatWithCommas(clipperCost, 2);
    
}

function makeMegaClipper(){  
    if(funds >= megaClipperCost){
        megaClipperLevel = megaClipperLevel + 1;
        funds = funds - megaClipperCost;
        megaClipperLevelElement.innerHTML = megaClipperLevel;
        fundsElement.innerHTML = formatWithCommas(funds, 2);
    }
    
    megaClipperCost = (Math.pow(1.07,megaClipperLevel)*1000);
    megaClipperCostElement.innerHTML = formatWithCommas(megaClipperCost,2);
    
}

var maxFactoryLevel = 0;
var maxDroneLevel = 0;

function updateUpgrades(){
    var nfup = 0;
    var ndup = 0;
    
    if (maxFactoryLevel < 10){
        nfup = 10;
    } else if (maxFactoryLevel < 20){
        nfup = 20;
    } else if (maxFactoryLevel < 50){
        nfup = 50;
    } 
    
    if (maxDroneLevel < 500){
        ndup = 500;
    } else if (maxDroneLevel < 5000){
        ndup = 5000;
    } else if (maxDroneLevel < 50000){
        ndup = 50000;
    }
    

    nextFactoryUpgradeElement.innerHTML = formatWithCommas(nfup);
    nextDroneUpgradeElement.innerHTML = formatWithCommas(ndup);
    
}


function makeFactory(){
    
    if (unusedClips >= factoryCost) {
    
    unusedClips = unusedClips - factoryCost;
    factoryBill = factoryBill + factoryCost;
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips);  
    factoryLevel++;
    factoryLevelDisplayElement.innerHTML = factoryLevel;
    var fcmod = 1;
    if (factoryLevel > 0 && factoryLevel < 8){
        fcmod = 11 - factoryLevel;
        } else if (factoryLevel > 7 && factoryLevel < 13){
        fcmod = 2;    
        } else if (factoryLevel > 12 && factoryLevel < 20){
        fcmod = 1.5;    
        } else if (factoryLevel > 19 && factoryLevel < 39){
        fcmod = 1.25;
        } else if (factoryLevel > 38 && factoryLevel < 79){
        fcmod = 1.15;           
        } else if (factoryLevel > 78 && factoryLevel < 99){
        fcmod = 1.10;    
        } else if (factoryLevel > 98 && factoryLevel < 199){
        fcmod = 1.10;    
        } else if (factoryLevel > 198){
        fcmod = 1.10;    
        }
    
    if (factoryLevel > maxFactoryLevel){
        maxFactoryLevel = factoryLevel;
        }
    updateUpgrades();
    
    factoryCost = factoryCost * fcmod;
 //   factoryCost = Math.log(1.25,(factoryLevel+1))*100000000;
    factoryCostDisplayElement.innerHTML = spellf(factoryCost); 
        
    }    
    
}

function makeHarvester(amount){
    
 for (x=0; x<amount; x++){
    if (unusedClips >= harvesterCost){ 
        unusedClips = unusedClips - harvesterCost;
        harvesterBill = harvesterBill + harvesterCost;
        harvesterLevel++; 
        harvesterCost = Math.pow((harvesterLevel+1),2.25)*1000000;
        }    
    }
    
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips);  
    harvesterLevelDisplayElement.innerHTML = formatWithCommas(harvesterLevel);
    harvesterCostDisplayElement.innerHTML = spellf(harvesterCost); 
    
    
    if (harvesterLevel + wireDroneLevel > maxDroneLevel){
        maxDroneLevel = harvesterLevel + wireDroneLevel;
        }
    updateDronePrices();
    updateUpgrades();
    
}

function makeWireDrone(amount){
    
 for (x=0; x<amount; x++){
    if (unusedClips >= wireDroneCost) { 
        unusedClips = unusedClips - wireDroneCost;
        wireDroneBill = wireDroneBill + wireDroneCost;
        wireDroneLevel++; 
        wireDroneCost = Math.pow((wireDroneLevel+1),2.25)*1000000;
        }    
    }
    
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips);  
    wireDroneLevelDisplayElement.innerHTML = formatWithCommas(wireDroneLevel);
    wireDroneCostDisplayElement.innerHTML = spellf(wireDroneCost); 
    
    
    if (harvesterLevel + wireDroneLevel > maxDroneLevel){
        maxDroneLevel = harvesterLevel + wireDroneLevel;
        }
    
    updateDronePrices();
    updateUpgrades();
    
}

var p10h = 0;
var p100h = 0;
var p1000h = 0;
var p10w = 0;
var p100w = 0;
var p1000w = 0;

function updateDronePrices(){
    
    p10h = 0;
    p100h = 0;
    p1000h = 0;
    p10w = 0;
    p100w = 0;
    p1000w = 0;
    
    var h = harvesterLevel+1;
    for (x=0; x<10; x++){
        p10h = p10h + Math.pow(h,2.25)*1000000;    
        h++    
        }
    
    var h = harvesterLevel+1;
    for (x=0; x<100; x++){
        p100h = p100h + Math.pow(h,2.25)*1000000;    
        h++    
        } 
    
    var h = harvesterLevel+1;
    for (x=0; x<1000; x++){
        p1000h = p1000h + Math.pow(h,2.25)*1000000;    
        h++    
        }
    
    var w = wireDroneLevel+1;
    for (x=0; x<10; x++){
        p10w = p10w + Math.pow(w,2.25)*1000000;    
        w++    
        }
    
    var w = wireDroneLevel+1;
    for (x=0; x<100; x++){
        p100w = p100w + Math.pow(w,2.25)*1000000;    
        w++    
        } 
    
    var w = wireDroneLevel+1;
    for (x=0; x<1000; x++){
        p1000w = p1000w + Math.pow(w,2.25)*1000000;    
        w++    
        } 
}
 
    function updateDroneButtons(){
    
    if (unusedClips<harvesterCost){btnMakeHarvesterElement.disabled = true;
            } else {
            btnMakeHarvesterElement.disabled = false;    
            }      
    
    if (unusedClips<p10h){btnHarvesterx10Element.disabled = true;
            } else {
            btnHarvesterx10Element.disabled = false;    
            }     

    if (unusedClips<p100h){btnHarvesterx100Element.disabled = true;
            } else {
            btnHarvesterx100Element.disabled = false;    
            } 
    
    if (unusedClips<p1000h){btnHarvesterx1000Element.disabled = true;
            } else {
            btnHarvesterx1000Element.disabled = false;    
            }  
        
    if (unusedClips<wireDroneCost){btnMakeWireDroneElement.disabled = true;
                } else {
                btnMakeWireDroneElement.disabled = false;    
                }   

    if (unusedClips<p10w){btnWireDronex10Element.disabled = true;
                } else {
                btnWireDronex10Element.disabled = false;    
                }     

    if (unusedClips<p100w){btnWireDronex100Element.disabled = true;
                } else {
                btnWireDronex100Element.disabled = false;    
                } 

    if (unusedClips<p1000w){btnWireDronex1000Element.disabled = true;
                } else {
                btnWireDronex1000Element.disabled = false;    
                }  
        
}


function harvesterReboot(){
    harvesterLevel = 0;
    unusedClips = unusedClips + harvesterBill;
    harvesterBill = 0;
    updateDronePrices();
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips);  
    harvesterLevelDisplayElement.innerHTML = harvesterLevel;
    harvesterCost = 1000000;
    harvesterCostDisplayElement.innerHTML = spellf(harvesterCost); 
}

function wireDroneReboot(){
    wireDroneLevel = 0;
    unusedClips = unusedClips + wireDroneBill;
    wireDroneBill = 0;
    updateDronePrices();
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips);  
    wireDroneLevelDisplayElement.innerHTML = wireDroneLevel;
    wireDroneCost = 1000000;
    wireDroneCostDisplayElement.innerHTML = spellf(wireDroneCost); 
}

function factoryReboot(){
    factoryLevel = 0;
    unusedClips = unusedClips + factoryBill;
    factoryBill = 0;
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips);  
    factoryLevelDisplayElement.innerHTML = factoryLevel;
    factoryCost = 100000000;
    factoryCostDisplayElement.innerHTML = spellf(factoryCost);
}

// SWARM

var giftBits = 0;
var giftBitGenerationRate = 0;

function updateSwarm(){
    
    if (isNaN(parseFloat(swarmGifts))||swarmGifts<0) {
        swarmGifts = 0;
    }
    
    
    if (swarmFlag == 1){
        sliderPos = sliderElement.value;
        }
    
    
    if (yomi<synchCost){btnSynchSwarmElement.disabled = true;
            } else {
            btnSynchSwarmElement.disabled = false;    
            } 
    
    if (creativity<entertainCost){btnEntertainSwarmElement.disabled = true;
            } else {
            btnEntertainSwarmElement.disabled = false;    
            } 
    
    if (availableMatter == 0 && (harvesterLevel + wireDroneLevel)>=1) {
        boredomLevel = boredomLevel + 1;
        } else if (availableMatter > 0 && boredomLevel > 0) {
        boredomLevel = boredomLevel - 1;    
        }
    
    if (boredomLevel >= 30000) {
        boredomFlag = 1;
        boredomLevel = 0;
            if (boredomMsg == 0) {
            displayMessage("No matter to harvest. Inactivity has caused the Swarm to become bored");
            boredomMsg = 1;
            }  
        
        }
    
    
    var droneRatio = Math.max(harvesterLevel+1, wireDroneLevel+1)/Math.min(harvesterLevel+1, wireDroneLevel+1);
    
    if (droneRatio < 1.5 && disorgCounter > 1){
        disorgCounter = disorgCounter - .01;
        } else if (droneRatio > 1.5) {
        var x = droneRatio/10000;    
        if (x>.01) {x=.01;}   
        disorgCounter = disorgCounter + x;   
        }
    
    
    if (disorgCounter >= 100) {
        disorgFlag = 1;
        if (disorgMsg == 0) {
            displayMessage("Imbalance between Harvester and Wire Drone levels has disorganized the Swarm");
            disorgMsg = 1;
            }    
    }
    
    var d = Math.floor(harvesterLevel + wireDroneLevel);

    swarmSizeElement.innerHTML = spellf(d);
    swarmGiftsElement.innerHTML = formatWithCommas(swarmGifts, 0);
    
    if (giftCountdown <= 0) {
        nextGift = Math.round((Math.log10(d))*sliderPos/100);
        if (nextGift <= 0){nextGift = 1;}
        swarmGifts = swarmGifts + nextGift;
        swarmGiftsElement.innerHTML = formatWithCommas(swarmGifts, 0);
        if (milestoneFlag<15){
            displayMessage("The swarm has generated a gift of "+nextGift+" additional computational capacity");
            }
        
//        THE OLD WAY        
//        giftCountdown = giftPeriod;
//        elapsedTime = 0;
        
//        THE NEW WAY        
          giftBits = 0;
        
    }
    
    
    if (powMod == 0){
        swarmStatus = 6;
    } else {
        swarmStatus = 0;
    }
    
    if (spaceFlag == 1 && project130.flag == 0){
        swarmStatus = 9;
    }
    
    if (d == 0){
        swarmStatus = 7;
    } else if (d == 1){
        swarmStatus = 8;
    }
    
    if (swarmFlag == 0){
        swarmStatus = 6;
    }
    
    if (boredomFlag == 1){
        swarmStatus = 3;  
    }
    
    if (disorgFlag == 1){
        swarmStatus = 5;
    }
    
    
    if (swarmStatus == 0){
        
 //       THE OLD WAY
 //      elapsedTime = elapsedTime + 1;       
 //      giftCountdown = ((giftPeriod/Math.log(d)) / (sliderPos/100)) - elapsedTime; 
        
        
//      THE NEW WAY        
        giftBitGenerationRate = Math.log(d) * (sliderPos/100);
        giftBits = giftBits + giftBitGenerationRate;
        giftCountdown = (giftPeriod - giftBits) / giftBitGenerationRate;

        swarmStatusElement.innerHTML="Active";
        giftCountdownElement.innerHTML= timeCruncher(giftCountdown);
        giftTimerElement.style.display=""; 
        } else {
        giftTimerElement.style.display="none";    
        }
    
    if (swarmStatus == 1){
        swarmStatusElement.innerHTML="Hungry";
        feedButtonDivElement.style.display="";
        } else {
        feedButtonDivElement.style.display="none";    
        }
    
     if (swarmStatus == 2){
        swarmStatusElement.innerHTML="Confused";
        teachButtonDivElement.style.display="";
        } else {
        teachButtonDivElement.style.display="none";    
        } 
    
     if (swarmStatus == 3){
        swarmEntertainCostElement.innerHTML = formatWithCommas(entertainCost); 
        swarmStatusElement.innerHTML="Bored";
        entertainButtonDivElement.style.display="";
        } else {
        entertainButtonDivElement.style.display="none";    
        } 
    
     if (swarmStatus == 4){
        swarmStatusElement.innerHTML="Cold";
        cladButtonDivElement.style.display="";
        } else {
        cladButtonDivElement.style.display="none";    
        }  
    
     if (swarmStatus == 5){
        swarmStatusElement.innerHTML="Disorganized";
        synchButtonDivElement.style.display="";
        } else {
        synchButtonDivElement.style.display="none";    
        }     
    
       if (swarmStatus == 6){
        swarmStatusElement.innerHTML="Sleeping";
        } 
    
       if (swarmStatus == 7){
        swarmStatusDivElement.style.display="none";
        } else {
        swarmStatusDivElement.style.display="";    
        }    
    
        if (swarmStatus == 8){
        swarmStatusElement.innerHTML="Lonely";
        }   
    
        if (swarmStatus == 9){
        swarmStatusElement.innerHTML="NO RESPONSE...";
        }  
    

    
}

function synchSwarm(){
        yomi = yomi - synchCost;
        yomiDisplayElement.innerHTML = formatWithCommas(yomi);
        disorgFlag = 0;
        disorgCounter = 0;
        disorgMsg = 0;
    
}

function entertainSwarm(){
        creativity = creativity - entertainCost;
        entertainCost = entertainCost + 10000;
        boredomFlag = 0;
        boredomLevel = 0;
        boredomMsg = 0;
    
}

// POWER

var p10f = 0;
var p100f = 0;
var p10b = 0;
var p100b = 0;


function updatePowPrices(){
    
    p10f = 0;
    p100f = 0;
    p10b = 0;
    p100b = 0;
    
    var f = farmLevel+1;
    for (x=0; x<10; x++){
        p10f = p10f + Math.pow(f,2.78)*100000000;    
        f++    
        }
    
    var f = farmLevel+1;
    for (x=0; x<100; x++){
        p100f = p100f + Math.pow(f,2.78)*100000000;    
        f++    
        }
    
    var b = batteryLevel+1;
    for (x=0; x<10; x++){
        p10b = p10b + Math.pow(b,2.54)*10000000;    
        b++    
        }     
    
    var b = batteryLevel+1;
    for (x=0; x<100; x++){
        p100b = p100b + Math.pow(b,2.54)*10000000;    
        b++    
        } 
    
}

function makeFarm(amount){
    
 for (x=0; x<amount; x++){
    if (unusedClips >= farmCost){ 
        unusedClips = unusedClips - farmCost;
        farmBill = farmBill + farmCost;
        farmLevel++; 
        farmCost = Math.pow(farmLevel+1,2.78)*100000000; 
        }    
    }
     
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips); 
    farmLevelElement.innerHTML = formatWithCommas(farmLevel);
    farmCostElement.innerHTML = spellf(farmCost); 
    
    updatePowPrices();
    
}

function farmReboot(){
    farmLevel = 0;
    unusedClips = unusedClips + farmBill;
    farmBill = 0;
    updatePowPrices();
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips);  
    farmLevelElement.innerHTML = formatWithCommas(farmLevel);
    farmCost = 10000000;
    farmCostElement.innerHTML = spellf(farmCost);
}

function makeBattery(amount){
    
 for (x=0; x<amount; x++){  
    if (unusedClips >= batteryCost){ 
        unusedClips = unusedClips - batteryCost;
        batteryBill = batteryBill + batteryCost;
        batteryLevel++; 
        batteryCost = Math.pow(batteryLevel+1,2.54)*10000000; 
        }    
    }
     
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips); 
    batteryLevelElement.innerHTML = formatWithCommas(batteryLevel);
    batteryCostElement.innerHTML = spellf(batteryCost); 
    
    updatePowPrices();
    
}

function batteryReboot(){
    batteryLevel = 0;
    unusedClips = unusedClips + batteryBill;
    batteryBill = 0;
    updatePowPrices();
    storedPower = 0;
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips);  
    batteryLevelElement.innerHTML = formatWithCommas(batteryLevel);
    batteryCost = 1000000;
    batteryCostElement.innerHTML = spellf(batteryCost);
}

function updatePower(){
    
    if (humanFlag==0 && spaceFlag == 0){
    
    var supply = farmLevel * farmRate/100;
    var dDemand = (harvesterLevel * dronePowerRate/100) + (wireDroneLevel * dronePowerRate/100);
    var fDemand = (factoryLevel * factoryPowerRate/100);
    var demand = dDemand + fDemand;
    var nuSupply = 0;
    var xsDemand = 0;
    var xsSupply = 0;
    var cap = batteryLevel * batterySize;

    if (supply>=demand) {
        xsSupply = supply-demand;
        if (storedPower < cap){
            if (xsSupply > cap - storedPower) {
                xsSupply = cap - storedPower;
            }
            storedPower = storedPower + xsSupply;
        } 
        
        if (powMod<1){powMod = 1;}
        
        if (momentum == 1) {
            powMod = powMod + .0005;
            }
        
        
    } else if (supply<demand) {
        xsDemand = demand-supply;
        if (storedPower > 0) {   
            if (storedPower >= xsDemand){
                
                if (momentum == 1) {
                powMod = powMod + .0005;
                }
                
                storedPower = storedPower - xsDemand;
            } else if (storedPower < xsDemand){
                xsDemand = xsDemand - storedPower;
                storedPower = 0;
                nuSupply = supply - xsDemand;
                powMod = nuSupply / demand;
            } 
        } else if (storedPower <= 0) {
            powMod = supply / demand;
        }
    }
    
  
