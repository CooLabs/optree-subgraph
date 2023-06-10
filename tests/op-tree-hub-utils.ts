import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
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
} from "../generated/OpTreeHub/OpTreeHub"

export function createBaseInitializedEvent(
  name: string,
  symbol: string,
  timestamp: BigInt
): BaseInitialized {
  let baseInitializedEvent = changetype<BaseInitialized>(newMockEvent())

  baseInitializedEvent.parameters = new Array()

  baseInitializedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  baseInitializedEvent.parameters.push(
    new ethereum.EventParam("symbol", ethereum.Value.fromString(symbol))
  )
  baseInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return baseInitializedEvent
}

export function createBaseRoyaltySetEvent(
  caller: Address,
  prevMaxBaseRoyalty: BigInt,
  newMaxBaseRoyalty: BigInt,
  timestamp: BigInt
): BaseRoyaltySet {
  let baseRoyaltySetEvent = changetype<BaseRoyaltySet>(newMockEvent())

  baseRoyaltySetEvent.parameters = new Array()

  baseRoyaltySetEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  baseRoyaltySetEvent.parameters.push(
    new ethereum.EventParam(
      "prevMaxBaseRoyalty",
      ethereum.Value.fromUnsignedBigInt(prevMaxBaseRoyalty)
    )
  )
  baseRoyaltySetEvent.parameters.push(
    new ethereum.EventParam(
      "newMaxBaseRoyalty",
      ethereum.Value.fromUnsignedBigInt(newMaxBaseRoyalty)
    )
  )
  baseRoyaltySetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return baseRoyaltySetEvent
}

export function createDerivedNFTInitializedEvent(
  collectionId: BigInt,
  profileId: BigInt,
  pubId: BigInt,
  timestamp: BigInt
): DerivedNFTInitialized {
  let derivedNftInitializedEvent = changetype<DerivedNFTInitialized>(
    newMockEvent()
  )

  derivedNftInitializedEvent.parameters = new Array()

  derivedNftInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionId",
      ethereum.Value.fromUnsignedBigInt(collectionId)
    )
  )
  derivedNftInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "profileId",
      ethereum.Value.fromUnsignedBigInt(profileId)
    )
  )
  derivedNftInitializedEvent.parameters.push(
    new ethereum.EventParam("pubId", ethereum.Value.fromUnsignedBigInt(pubId))
  )
  derivedNftInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return derivedNftInitializedEvent
}

export function createDerivedRuleModuleWhitelistedEvent(
  derivedRuleModule: Address,
  whitelist: boolean,
  timestamp: BigInt
): DerivedRuleModuleWhitelisted {
  let derivedRuleModuleWhitelistedEvent = changetype<
    DerivedRuleModuleWhitelisted
  >(newMockEvent())

  derivedRuleModuleWhitelistedEvent.parameters = new Array()

  derivedRuleModuleWhitelistedEvent.parameters.push(
    new ethereum.EventParam(
      "derivedRuleModule",
      ethereum.Value.fromAddress(derivedRuleModule)
    )
  )
  derivedRuleModuleWhitelistedEvent.parameters.push(
    new ethereum.EventParam("whitelist", ethereum.Value.fromBoolean(whitelist))
  )
  derivedRuleModuleWhitelistedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return derivedRuleModuleWhitelistedEvent
}

export function createEmergencyAdminSetEvent(
  caller: Address,
  oldEmergencyAdmin: Address,
  newEmergencyAdmin: Address,
  timestamp: BigInt
): EmergencyAdminSet {
  let emergencyAdminSetEvent = changetype<EmergencyAdminSet>(newMockEvent())

  emergencyAdminSetEvent.parameters = new Array()

  emergencyAdminSetEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  emergencyAdminSetEvent.parameters.push(
    new ethereum.EventParam(
      "oldEmergencyAdmin",
      ethereum.Value.fromAddress(oldEmergencyAdmin)
    )
  )
  emergencyAdminSetEvent.parameters.push(
    new ethereum.EventParam(
      "newEmergencyAdmin",
      ethereum.Value.fromAddress(newEmergencyAdmin)
    )
  )
  emergencyAdminSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return emergencyAdminSetEvent
}

export function createGovernanceSetEvent(
  caller: Address,
  prevGovernance: Address,
  newGovernance: Address,
  timestamp: BigInt
): GovernanceSet {
  let governanceSetEvent = changetype<GovernanceSet>(newMockEvent())

  governanceSetEvent.parameters = new Array()

  governanceSetEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  governanceSetEvent.parameters.push(
    new ethereum.EventParam(
      "prevGovernance",
      ethereum.Value.fromAddress(prevGovernance)
    )
  )
  governanceSetEvent.parameters.push(
    new ethereum.EventParam(
      "newGovernance",
      ethereum.Value.fromAddress(newGovernance)
    )
  )
  governanceSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return governanceSetEvent
}

export function createModuleBaseConstructedEvent(
  lensHub: Address,
  opTreeHub: Address,
  timestamp: BigInt
): ModuleBaseConstructed {
  let moduleBaseConstructedEvent = changetype<ModuleBaseConstructed>(
    newMockEvent()
  )

  moduleBaseConstructedEvent.parameters = new Array()

  moduleBaseConstructedEvent.parameters.push(
    new ethereum.EventParam("lensHub", ethereum.Value.fromAddress(lensHub))
  )
  moduleBaseConstructedEvent.parameters.push(
    new ethereum.EventParam("opTreeHub", ethereum.Value.fromAddress(opTreeHub))
  )
  moduleBaseConstructedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return moduleBaseConstructedEvent
}

export function createNFTRoyaltySetEvent(
  caller: Address,
  prevMaxBaseRoyalty: BigInt,
  newMaxBaseRoyalty: BigInt,
  timestamp: BigInt
): NFTRoyaltySet {
  let nftRoyaltySetEvent = changetype<NFTRoyaltySet>(newMockEvent())

  nftRoyaltySetEvent.parameters = new Array()

  nftRoyaltySetEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  nftRoyaltySetEvent.parameters.push(
    new ethereum.EventParam(
      "prevMaxBaseRoyalty",
      ethereum.Value.fromUnsignedBigInt(prevMaxBaseRoyalty)
    )
  )
  nftRoyaltySetEvent.parameters.push(
    new ethereum.EventParam(
      "newMaxBaseRoyalty",
      ethereum.Value.fromUnsignedBigInt(newMaxBaseRoyalty)
    )
  )
  nftRoyaltySetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return nftRoyaltySetEvent
}

export function createNewCollectionCreatedEvent(
  collectionOwner: Address,
  collectionId: BigInt,
  profileId: BigInt,
  pubId: BigInt,
  baseRoyalty: BigInt,
  maxSupply: BigInt,
  mintDeadline: BigInt,
  whitelistRootHash: Bytes,
  derivedCollectionAddr: Address,
  collInfoURI: string,
  derivedRuleModule: Address,
  timestamp: BigInt
): NewCollectionCreated {
  let newCollectionCreatedEvent = changetype<NewCollectionCreated>(
    newMockEvent()
  )

  newCollectionCreatedEvent.parameters = new Array()

  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionOwner",
      ethereum.Value.fromAddress(collectionOwner)
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionId",
      ethereum.Value.fromUnsignedBigInt(collectionId)
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "profileId",
      ethereum.Value.fromUnsignedBigInt(profileId)
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam("pubId", ethereum.Value.fromUnsignedBigInt(pubId))
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "baseRoyalty",
      ethereum.Value.fromUnsignedBigInt(baseRoyalty)
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "maxSupply",
      ethereum.Value.fromUnsignedBigInt(maxSupply)
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "mintDeadline",
      ethereum.Value.fromUnsignedBigInt(mintDeadline)
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "whitelistRootHash",
      ethereum.Value.fromFixedBytes(whitelistRootHash)
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "derivedCollectionAddr",
      ethereum.Value.fromAddress(derivedCollectionAddr)
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "collInfoURI",
      ethereum.Value.fromString(collInfoURI)
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "derivedRuleModule",
      ethereum.Value.fromAddress(derivedRuleModule)
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return newCollectionCreatedEvent
}

export function createNewNFTCreatedEvent(
  tokenId: BigInt,
  collectionId: BigInt,
  profileId: BigInt,
  profileIdPointed: BigInt,
  pubIdPointed: BigInt,
  derivedFrom: BigInt,
  nftRoyalty: BigInt,
  nftInfoURI: string
): NewNFTCreated {
  let newNftCreatedEvent = changetype<NewNFTCreated>(newMockEvent())

  newNftCreatedEvent.parameters = new Array()

  newNftCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  newNftCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionId",
      ethereum.Value.fromUnsignedBigInt(collectionId)
    )
  )
  newNftCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "profileId",
      ethereum.Value.fromUnsignedBigInt(profileId)
    )
  )
  newNftCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "profileIdPointed",
      ethereum.Value.fromUnsignedBigInt(profileIdPointed)
    )
  )
  newNftCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "pubIdPointed",
      ethereum.Value.fromUnsignedBigInt(pubIdPointed)
    )
  )
  newNftCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "derivedFrom",
      ethereum.Value.fromUnsignedBigInt(derivedFrom)
    )
  )
  newNftCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "nftRoyalty",
      ethereum.Value.fromUnsignedBigInt(nftRoyalty)
    )
  )
  newNftCreatedEvent.parameters.push(
    new ethereum.EventParam("nftInfoURI", ethereum.Value.fromString(nftInfoURI))
  )

  return newNftCreatedEvent
}

export function createStateSetEvent(
  caller: Address,
  prevState: i32,
  newState: i32,
  timestamp: BigInt
): StateSet {
  let stateSetEvent = changetype<StateSet>(newMockEvent())

  stateSetEvent.parameters = new Array()

  stateSetEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  stateSetEvent.parameters.push(
    new ethereum.EventParam(
      "prevState",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(prevState))
    )
  )
  stateSetEvent.parameters.push(
    new ethereum.EventParam(
      "newState",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newState))
    )
  )
  stateSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return stateSetEvent
}
