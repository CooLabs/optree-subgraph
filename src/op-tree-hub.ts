import {
  BaseInitialized as BaseInitializedEvent,
  BaseRoyaltySet as BaseRoyaltySetEvent,
  DerivedNFTInitialized as DerivedNFTInitializedEvent,
  DerivedRuleModuleWhitelisted as DerivedRuleModuleWhitelistedEvent,
  EmergencyAdminSet as EmergencyAdminSetEvent,
  GovernanceSet as GovernanceSetEvent,
  ModuleBaseConstructed as ModuleBaseConstructedEvent,
  NFTRoyaltySet as NFTRoyaltySetEvent,
  NewCollectionCreated as NewCollectionCreatedEvent,
  NewNFTCreated as NewNFTCreatedEvent,
  StateSet as StateSetEvent
} from "../generated/OpTreeHub/OpTreeHub"
import {
  BaseInitialized,
  BaseRoyaltySet,
  DerivedNFTInitialized,
  DerivedRuleModuleWhitelisted,
  EmergencyAdminSet,
  GovernanceSet,
  ModuleBaseConstructed,
  NFTRoyaltySet,
  NewCollectionCreated,
  NewNFTCreated,
  StateSet
} from "../generated/schema"

export function handleBaseInitialized(event: BaseInitializedEvent): void {
  let entity = new BaseInitialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.name = event.params.name
  entity.symbol = event.params.symbol
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBaseRoyaltySet(event: BaseRoyaltySetEvent): void {
  let entity = new BaseRoyaltySet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.prevMaxBaseRoyalty = event.params.prevMaxBaseRoyalty
  entity.newMaxBaseRoyalty = event.params.newMaxBaseRoyalty
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDerivedNFTInitialized(
  event: DerivedNFTInitializedEvent
): void {
  let entity = new DerivedNFTInitialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collectionId = event.params.collectionId
  entity.profileId = event.params.profileId
  entity.pubId = event.params.pubId
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDerivedRuleModuleWhitelisted(
  event: DerivedRuleModuleWhitelistedEvent
): void {
  let entity = new DerivedRuleModuleWhitelisted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.derivedRuleModule = event.params.derivedRuleModule
  entity.whitelist = event.params.whitelist
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEmergencyAdminSet(event: EmergencyAdminSetEvent): void {
  let entity = new EmergencyAdminSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.oldEmergencyAdmin = event.params.oldEmergencyAdmin
  entity.newEmergencyAdmin = event.params.newEmergencyAdmin
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGovernanceSet(event: GovernanceSetEvent): void {
  let entity = new GovernanceSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.prevGovernance = event.params.prevGovernance
  entity.newGovernance = event.params.newGovernance
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleModuleBaseConstructed(
  event: ModuleBaseConstructedEvent
): void {
  let entity = new ModuleBaseConstructed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lensHub = event.params.lensHub
  entity.opTreeHub = event.params.opTreeHub
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFTRoyaltySet(event: NFTRoyaltySetEvent): void {
  let entity = new NFTRoyaltySet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.prevMaxBaseRoyalty = event.params.prevMaxBaseRoyalty
  entity.newMaxBaseRoyalty = event.params.newMaxBaseRoyalty
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewCollectionCreated(
  event: NewCollectionCreatedEvent
): void {
  let entity = new NewCollectionCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collectionOwner = event.params.collectionOwner
  entity.collectionId = event.params.collectionId
  entity.profileId = event.params.profileId
  entity.pubId = event.params.pubId
  entity.baseRoyalty = event.params.baseRoyalty
  entity.maxSupply = event.params.maxSupply
  entity.mintDeadline = event.params.mintDeadline
  entity.whitelistRootHash = event.params.whitelistRootHash
  entity.derivedCollectionAddr = event.params.derivedCollectionAddr
  entity.collInfoURI = event.params.collInfoURI
  entity.derivedRuleModule = event.params.derivedRuleModule
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewNFTCreated(event: NewNFTCreatedEvent): void {
  let entity = new NewNFTCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.collectionId = event.params.collectionId
  entity.profileId = event.params.profileId
  entity.profileIdPointed = event.params.profileIdPointed
  entity.pubIdPointed = event.params.pubIdPointed
  entity.derivedFrom = event.params.derivedFrom
  entity.nftRoyalty = event.params.nftRoyalty
  entity.nftInfoURI = event.params.nftInfoURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStateSet(event: StateSetEvent): void {
  let entity = new StateSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.prevState = event.params.prevState
  entity.newState = event.params.newState
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
