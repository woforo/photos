import { NativeModules } from 'react-native'

import {
  File,
  ExternalInvite,
  CafeSession,
  ContactInfo,
  Overview,
  Profile,
  FileData,
  ThreadInfo,
  WalletAccount,
  BlockInfo,
  ThreadFilesInfo,
  Notification
} from './Model'
import { IMobilePreparedFiles, IDirectory } from './pb/textile-go'

const { TextileNode } = NativeModules

export async function acceptExternalThreadInvite(id_: string, key: string): Promise<string> {
  const result = await TextileNode.acceptExternalThreadInvite(id_, key) // returns hash
  return result as string
}

export async function acceptThreadInviteViaNotification(id_: string): Promise<string> {
  const result = await TextileNode.acceptThreadInviteViaNotification(id_) // returns addr
  return result as string
}

export async function addContact(id_: string, address: string, username: string): Promise<void> {
  await TextileNode.addContact(id_, address, username)
}

export async function addExternalThreadInvite(threadId: string): Promise<ExternalInvite> {
  const result = await TextileNode.addExternalThreadInvite(threadId)
  return JSON.parse(result) as ExternalInvite
}

export async function addPeerToThread(id_: string, threadId: string): Promise<void> {
  await TextileNode.addPeerToThread(id_, threadId)
}

export async function addSchema(jsonstr: string): Promise<File> {
  const result = await TextileNode.addSchema(jsonstr)
  return JSON.parse(result) as File
}

export async function addThread(key: string, name: string): Promise<ThreadInfo> {
  const result = await TextileNode.addThread(key, name)
  return JSON.parse(result) as ThreadInfo
}

export async function addThreadComment(blockId: string, body: string): Promise<string> {
  const result = await TextileNode.addThreadComment(blockId, body) // returns hash
  return result as string
}

export async function addThreadFiles(dir: IDirectory, threadId: string, caption?: string): Promise<BlockInfo> {
  const result = await TextileNode.addThreadFiles(dir, threadId, caption)
  return JSON.parse(result) as BlockInfo
}

export async function addThreadFilesByTarget(target: string, threadId: string, caption?: string): Promise<BlockInfo> {
  const result = await TextileNode.addThreadFilesByTarget(target, threadId, caption)
  return JSON.parse(result) as BlockInfo
}

export async function addThreadIgnore(blockId: string): Promise<string> {
  const result = await TextileNode.addThreadIgnore(blockId) // returns hash
  return result as string
}

export async function addThreadInvite(threadId: string, inviteeId: string): Promise<string> {
  const result = await TextileNode.addThreadInvite(threadId, inviteeId) // returns hash
  return result as string
}

export async function addThreadLike(blockId: string): Promise<string> {
  const result = await TextileNode.addThreadLike(blockId) // returns hash
  return result as string
}

export async function address(): Promise<string> {
  const result = await TextileNode.address()
  return result as string
}

export async function cafeSession(peerId: string): Promise<CafeSession> {
  const result = await TextileNode.cafeSession(peerId)
  return JSON.parse(result) as CafeSession
}

export async function cafeSessions(): Promise<ReadonlyArray<CafeSession>> {
  const result = await TextileNode.cafeSessions()
  return JSON.parse(result) as ReadonlyArray<CafeSession>
}

export async function checkCafeMessages(): Promise<void> {
  await TextileNode.checkCafeMail()
}

export async function contact(id_: string): Promise<ContactInfo> {
  const result = await TextileNode.contact(id_)
  return JSON.parse(result) as ContactInfo
}

export async function contactThreads(id_: string): Promise<ReadonlyArray<ThreadInfo>> {
  const result = await TextileNode.contactThreads(id_)
  return JSON.parse(result) as ReadonlyArray<ThreadInfo>
}

export async function contactUsername(id_: string): Promise<string> {
  // TODO: Deal with empty string?
  const result = await TextileNode.contactUsername(id_)
  return result as string
}

export async function contacts(): Promise<ReadonlyArray<ContactInfo>> {
  const result = await TextileNode.contacts()
  return JSON.parse(result) as ReadonlyArray<ContactInfo>
}

export async function countUnreadNotifications(): Promise<number> {
  const result = await TextileNode.countUnreadNotifications()
  return result as number
}

export async function deregisterCafe(peerId: string): Promise<void> {
  await TextileNode.deregisterCafe(peerId)
}

// TODO: Use this to get image data
export async function fileData(hash: string): Promise<FileData> {
  const result = await TextileNode.fileData(hash)
  return JSON.parse(result) as FileData
}

export async function ignoreThreadInviteViaNotification(id_: string): Promise<string> {
  const result = await TextileNode.ignoreThreadInviteViaNotification(id_)
  return result as string
}

// Note: pth is <target>/<index>, e.g., "Qm.../0"
export async function imageFileDataForMinWidth(pth: string, minWidth: number): Promise<FileData> {
  const result = await TextileNode.imageFileDataForMinWidth(pth, minWidth)
  return JSON.parse(result) as FileData
}

export async function notifications(offset: string, limit: number): Promise<ReadonlyArray<Notification>> {
  const result = await TextileNode.notifications(offset, limit)
  return JSON.parse(result) as ReadonlyArray<Notification>
}

export async function overview(): Promise<Overview> {
  const result = await TextileNode.overview()
  return JSON.parse(result) as Overview
}

export async function peerId(): Promise<string> {
  const result = await TextileNode.peerId()
  return result as string
}

export async function peerProfile(peerId: string): Promise<Profile> {
  const result = await TextileNode.peerProfile(peerId)
  return JSON.parse(result) as Profile
}

export async function prepareFiles(path: string, threadId: string): Promise<IMobilePreparedFiles> {
  // This result should be an object type from proto buf, update return type
  const result = await TextileNode.prepareFiles(path, threadId)
  return result as IMobilePreparedFiles
}

export async function prepareFilesAsync(path: string, threadId: string): Promise<IMobilePreparedFiles> {
  // This result should be an object type from proto buf, update return type
  const result = await TextileNode.prepareFilesAsync(path, threadId)
  return result as IMobilePreparedFiles
}

export async function profile(): Promise<Profile> {
  const result = await TextileNode.profile()
  return JSON.parse(result) as Profile
}

export async function readAllNotifications(): Promise<void> {
  await TextileNode.readAllNotifications()
}

export async function readNotification(id_: string): Promise<void> {
  await TextileNode.readNotification(id_)
}

export async function refreshCafeSession(cafeId: string): Promise<CafeSession> {
  const result = await TextileNode.refreshCafeSession(cafeId)
  return JSON.parse(result) as CafeSession
}

export async function registerCafe(peerId: string): Promise<void> {
  await TextileNode.registerCafe(peerId)
}

export async function removeThread(id_: string): Promise<string> {
  const result = await TextileNode.removeThread(id_) // returns hash b58 string
  return result as string
}

export async function seed(): Promise<string> {
  const result = await TextileNode.seed()
  return result as string
}

export async function setAvatar(id_: string): Promise<void> {
  await TextileNode.setAvatar(id_)
}

export async function setUsername(username: string): Promise<void> {
  await TextileNode.setUsername(username)
}

export async function start(): Promise<void> {
  await TextileNode.start()
}

export async function stop(): Promise<void> {
  await TextileNode.stop()
}

// TODO: How to pass undefined values?
export async function threadFiles(offset: string, limit: number, threadId?: string): Promise<ReadonlyArray<ThreadFilesInfo>> {
  const result = await TextileNode.threadFiles(offset, limit, threadId)
  return JSON.parse(result) as ReadonlyArray<ThreadFilesInfo>
}

export async function threadInfo(threadId: string): Promise<ThreadInfo> {
  const result = await TextileNode.threadInfo(threadId)
  return JSON.parse(result) as ThreadInfo
}

export async function threads(): Promise<ReadonlyArray<ThreadInfo>> {
  const result = await TextileNode.threads()
  return JSON.parse(result) as ReadonlyArray<ThreadInfo>
}

export async function username(): Promise<string> {
  // TODO: Deal with empty string?
  const result = await TextileNode.username()
  return result as string
}

export async function version(): Promise<string> {
  const result = await TextileNode.version()
  return result as string
}

// Order of things to init and create the repo:
// MobileNewTextile If error, inspect it and run next steps or migration
// MobileNewWallet returns recovery phrase
// MobileWalletAccountAt returns seed and address
// MobileInitRepo only run one time ever
// MobileNewTextile

export async function initRepo(seed: string, repoPath: string, logLevel: string, logToDisk: boolean): Promise<void> {
  return await TextileNode.initRepo(seed, repoPath, logLevel, logToDisk)
}

export async function migrateRepo(repoPath: string): Promise<void> {
  await TextileNode.migrateRepo(repoPath)
}

export async function newTextile(repoPath: string): Promise<void> {
  await TextileNode.newTextile(repoPath)
}

export async function newWallet(wordCount: number): Promise<string> {
  const result = await TextileNode.newWallet(wordCount)
  return result as string
}

export async function walletAccountAt(phrase: string, index: number, password?: string): Promise<WalletAccount> {
  const result = await TextileNode.walletAccountAt(phrase, index, password) // return seed and address
  return JSON.parse(result) as WalletAccount
}
