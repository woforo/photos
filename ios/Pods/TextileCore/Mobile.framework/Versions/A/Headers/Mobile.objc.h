// Objective-C API for talking to github.com/textileio/go-textile/mobile Go package.
//   gobind -lang=objc github.com/textileio/go-textile/mobile
//
// File is generated by gobind. Do not edit.

#ifndef __Mobile_H__
#define __Mobile_H__

@import Foundation;
#include "ref.h"
#include "Universe.objc.h"

#include "Core.objc.h"

@class MobileEvent;
@class MobileInitConfig;
@class MobileMigrateConfig;
@class MobileMobile;
@class MobileRunConfig;
@class MobileSearchHandle;
@protocol MobileCallback;
@class MobileCallback;
@protocol MobileDataCallback;
@class MobileDataCallback;
@protocol MobileMessenger;
@class MobileMessenger;
@protocol MobileProtoCallback;
@class MobileProtoCallback;

@protocol MobileCallback <NSObject>
- (void)call:(NSError* _Nullable)err;
@end

@protocol MobileDataCallback <NSObject>
- (void)call:(NSData* _Nullable)data media:(NSString* _Nullable)media err:(NSError* _Nullable)err;
@end

@protocol MobileMessenger <NSObject>
- (void)notify:(MobileEvent* _Nullable)event;
@end

@protocol MobileProtoCallback <NSObject>
- (void)call:(NSData* _Nullable)msg err:(NSError* _Nullable)err;
@end

/**
 * Event is sent by Messenger to the bridge (data is a protobuf,
name is the string value of a pb.MobileEvent_Type)
 */
@interface MobileEvent : NSObject <goSeqRefInterface> {
}
@property(strong, readonly) _Nonnull id _ref;

- (nonnull instancetype)initWithRef:(_Nonnull id)ref;
- (nonnull instancetype)init;
@property (nonatomic) NSString* _Nonnull name;
@property (nonatomic) int32_t type;
@property (nonatomic) NSData* _Nullable data;
@end

/**
 * InitConfig is used to setup a textile node
 */
@interface MobileInitConfig : NSObject <goSeqRefInterface> {
}
@property(strong, readonly) _Nonnull id _ref;

- (nonnull instancetype)initWithRef:(_Nonnull id)ref;
- (nonnull instancetype)init;
@property (nonatomic) NSString* _Nonnull seed;
@property (nonatomic) NSString* _Nonnull repoPath;
@property (nonatomic) BOOL logToDisk;
@property (nonatomic) BOOL debug;
@end

/**
 * MigrateConfig is used to define options during a major migration
 */
@interface MobileMigrateConfig : NSObject <goSeqRefInterface> {
}
@property(strong, readonly) _Nonnull id _ref;

- (nonnull instancetype)initWithRef:(_Nonnull id)ref;
- (nonnull instancetype)init;
@property (nonatomic) NSString* _Nonnull repoPath;
@end

/**
 * Mobile is the name of the framework (must match package name)
 */
@interface MobileMobile : NSObject <goSeqRefInterface> {
}
@property(strong, readonly) _Nonnull id _ref;

- (nonnull instancetype)initWithRef:(_Nonnull id)ref;
- (nonnull instancetype)init;
@property (nonatomic) NSString* _Nonnull repoPath;
- (NSString* _Nonnull)acceptExternalInvite:(NSString* _Nullable)id_ key:(NSString* _Nullable)key error:(NSError* _Nullable* _Nullable)error;
- (NSString* _Nonnull)acceptInvite:(NSString* _Nullable)id_ error:(NSError* _Nullable* _Nullable)error;
/**
 * AcceptInviteViaNotification call core AcceptInviteViaNotification
 */
- (NSString* _Nonnull)acceptInviteViaNotification:(NSString* _Nullable)id_ error:(NSError* _Nullable* _Nullable)error;
- (NSData* _Nullable)accountContact:(NSError* _Nullable* _Nullable)error;
- (NSData* _Nullable)accountThread:(NSError* _Nullable* _Nullable)error;
- (NSString* _Nonnull)addComment:(NSString* _Nullable)blockId body:(NSString* _Nullable)body error:(NSError* _Nullable* _Nullable)error;
- (BOOL)addContact:(NSData* _Nullable)contact error:(NSError* _Nullable* _Nullable)error;
- (void)addData:(NSData* _Nullable)data threadId:(NSString* _Nullable)threadId caption:(NSString* _Nullable)caption cb:(id<MobileProtoCallback> _Nullable)cb;
- (NSData* _Nullable)addExternalInvite:(NSString* _Nullable)threadId error:(NSError* _Nullable* _Nullable)error;
- (void)addFiles:(NSString* _Nullable)paths threadId:(NSString* _Nullable)threadId caption:(NSString* _Nullable)caption cb:(id<MobileProtoCallback> _Nullable)cb;
- (NSString* _Nonnull)addFlag:(NSString* _Nullable)blockId error:(NSError* _Nullable* _Nullable)error;
- (NSString* _Nonnull)addIgnore:(NSString* _Nullable)blockId error:(NSError* _Nullable* _Nullable)error;
- (BOOL)addInvite:(NSString* _Nullable)threadId address:(NSString* _Nullable)address error:(NSError* _Nullable* _Nullable)error;
- (NSString* _Nonnull)addLike:(NSString* _Nullable)blockId error:(NSError* _Nullable* _Nullable)error;
- (NSString* _Nonnull)addMessage:(NSString* _Nullable)threadId body:(NSString* _Nullable)body error:(NSError* _Nullable* _Nullable)error;
/**
 * AddOrUpdateThread calls core AddOrUpdateThread
 */
- (BOOL)addOrUpdateThread:(NSData* _Nullable)thrd error:(NSError* _Nullable* _Nullable)error;
/**
 * AddSchema adds a new schema via schema mill
 */
- (NSData* _Nullable)addSchema:(NSData* _Nullable)node error:(NSError* _Nullable* _Nullable)error;
/**
 * AddThread adds a new thread with the given name
 */
- (NSData* _Nullable)addThread:(NSData* _Nullable)config error:(NSError* _Nullable* _Nullable)error;
- (NSString* _Nonnull)address;
/**
 * Avatar calls core Avatar
 */
- (NSString* _Nonnull)avatar:(NSError* _Nullable* _Nullable)error;
- (BOOL)cafeRequestNotPending:(NSString* _Nullable)id_ error:(NSError* _Nullable* _Nullable)error;
- (BOOL)cafeRequestPending:(NSString* _Nullable)id_ error:(NSError* _Nullable* _Nullable)error;
- (NSData* _Nullable)cafeRequests:(long)limit error:(NSError* _Nullable* _Nullable)error;
- (NSData* _Nullable)cafeSession:(NSString* _Nullable)id_ error:(NSError* _Nullable* _Nullable)error;
- (NSData* _Nullable)cafeSessions:(NSError* _Nullable* _Nullable)error;
- (BOOL)checkCafeMessages:(NSError* _Nullable* _Nullable)error;
- (BOOL)completeCafeRequest:(NSString* _Nullable)id_ error:(NSError* _Nullable* _Nullable)error;
- (NSData* _Nullable)contact:(NSString* _Nullable)address error:(NSError* _Nullable* _Nullable)error;
- (NSData* _Nullable)contactThreads:(NSString* _Nullable)address error:(NSError* _Nullable* _Nullable)error;
- (NSData* _Nullable)contacts:(NSError* _Nullable* _Nullable)error;
/**
 * CountUnreadNotifications calls core CountUnreadNotifications
 */
- (long)countUnreadNotifications;
- (void)dataAtPath:(NSString* _Nullable)pth cb:(id<MobileDataCallback> _Nullable)cb;
- (NSData* _Nullable)decrypt:(NSData* _Nullable)input error:(NSError* _Nullable* _Nullable)error;
- (void)deregisterCafe:(NSString* _Nullable)id_ cb:(id<MobileCallback> _Nullable)cb;
- (NSData* _Nullable)encrypt:(NSData* _Nullable)input error:(NSError* _Nullable* _Nullable)error;
- (BOOL)failCafeRequest:(NSString* _Nullable)id_ reason:(NSString* _Nullable)reason error:(NSError* _Nullable* _Nullable)error;
- (NSData* _Nullable)feed:(NSData* _Nullable)req error:(NSError* _Nullable* _Nullable)error;
- (void)fileContent:(NSString* _Nullable)hash cb:(id<MobileDataCallback> _Nullable)cb;
- (NSData* _Nullable)files:(NSString* _Nullable)threadId offset:(NSString* _Nullable)offset limit:(long)limit error:(NSError* _Nullable* _Nullable)error;
/**
 * GitSummary returns common GitSummary
 */
- (NSString* _Nonnull)gitSummary;
- (BOOL)ignoreInvite:(NSString* _Nullable)id_ error:(NSError* _Nullable* _Nullable)error;
/**
 * IgnoreInviteViaNotification call core IgnoreInviteViaNotification
 */
- (BOOL)ignoreInviteViaNotification:(NSString* _Nullable)id_ error:(NSError* _Nullable* _Nullable)error;
- (void)imageFileContentForMinWidth:(NSString* _Nullable)pth minWidth:(long)minWidth cb:(id<MobileDataCallback> _Nullable)cb;
- (NSData* _Nullable)invites:(NSError* _Nullable* _Nullable)error;
- (NSData* _Nullable)messages:(NSString* _Nullable)offset limit:(long)limit threadId:(NSString* _Nullable)threadId error:(NSError* _Nullable* _Nullable)error;
/**
 * Name calls core Name
 */
- (NSString* _Nonnull)name:(NSError* _Nullable* _Nullable)error;
/**
 * Notifications call core Notifications
 */
- (NSData* _Nullable)notifications:(NSString* _Nullable)offset limit:(long)limit error:(NSError* _Nullable* _Nullable)error;
/**
 * Online returns core Online
 */
- (BOOL)online;
- (NSString* _Nonnull)peerId:(NSError* _Nullable* _Nullable)error;
/**
 * Profile calls core Profile
 */
- (NSData* _Nullable)profile:(NSError* _Nullable* _Nullable)error;
/**
 * ReadAllNotifications calls core ReadAllNotifications
 */
- (BOOL)readAllNotifications:(NSError* _Nullable* _Nullable)error;
/**
 * ReadNotification calls core ReadNotification
 */
- (BOOL)readNotification:(NSString* _Nullable)id_ error:(NSError* _Nullable* _Nullable)error;
- (void)refreshCafeSession:(NSString* _Nullable)id_ cb:(id<MobileProtoCallback> _Nullable)cb;
- (void)registerCafe:(NSString* _Nullable)id_ token:(NSString* _Nullable)token cb:(id<MobileCallback> _Nullable)cb;
- (BOOL)removeContact:(NSString* _Nullable)address error:(NSError* _Nullable* _Nullable)error;
/**
 * RemoveThread call core RemoveThread
 */
- (NSString* _Nonnull)removeThread:(NSString* _Nullable)id_ error:(NSError* _Nullable* _Nullable)error;
/**
 * RenameThread call core RenameThread
 */
- (BOOL)renameThread:(NSString* _Nullable)id_ name:(NSString* _Nullable)name error:(NSError* _Nullable* _Nullable)error;
- (MobileSearchHandle* _Nullable)searchContacts:(NSData* _Nullable)query options:(NSData* _Nullable)options error:(NSError* _Nullable* _Nullable)error;
/**
 * SearchThreadSnapshots calls core SearchThreadSnapshots
 */
- (MobileSearchHandle* _Nullable)searchThreadSnapshots:(NSData* _Nullable)query options:(NSData* _Nullable)options error:(NSError* _Nullable* _Nullable)error;
- (NSString* _Nonnull)seed;
/**
 * SetAvatar adds the image at pth to the account thread and calls core SetAvatar
 */
- (void)setAvatar:(NSString* _Nullable)pth cb:(id<MobileProtoCallback> _Nullable)cb;
- (BOOL)setLogLevel:(NSData* _Nullable)level error:(NSError* _Nullable* _Nullable)error;
/**
 * SetName calls core SetName
 */
- (BOOL)setName:(NSString* _Nullable)username error:(NSError* _Nullable* _Nullable)error;
- (void)shareFiles:(NSString* _Nullable)data threadId:(NSString* _Nullable)threadId caption:(NSString* _Nullable)caption cb:(id<MobileProtoCallback> _Nullable)cb;
/**
 * SnapshotThreads calls core SnapshotThreads
 */
- (BOOL)snapshotThreads:(NSError* _Nullable* _Nullable)error;
/**
 * Start the mobile node
 */
- (BOOL)start:(NSError* _Nullable* _Nullable)error;
/**
 * Stop the mobile node
 */
- (BOOL)stop:(NSError* _Nullable* _Nullable)error;
/**
 * Summary calls core Summary
 */
- (NSData* _Nullable)summary:(NSError* _Nullable* _Nullable)error;
- (MobileSearchHandle* _Nullable)syncAccount:(NSData* _Nullable)options error:(NSError* _Nullable* _Nullable)error;
/**
 * Thread calls core Thread
 */
- (NSData* _Nullable)thread:(NSString* _Nullable)id_ error:(NSError* _Nullable* _Nullable)error;
/**
 * ThreadPeers calls core ThreadPeers
 */
- (NSData* _Nullable)threadPeers:(NSString* _Nullable)id_ error:(NSError* _Nullable* _Nullable)error;
/**
 * Threads lists all threads
 */
- (NSData* _Nullable)threads:(NSError* _Nullable* _Nullable)error;
- (BOOL)updateCafeRequestProgress:(NSString* _Nullable)id_ transerred:(int64_t)transerred total:(int64_t)total error:(NSError* _Nullable* _Nullable)error;
/**
 * Version returns common Version
 */
- (NSString* _Nonnull)version;
- (void)writeCafeRequest:(NSString* _Nullable)group cb:(id<MobileProtoCallback> _Nullable)cb;
@end

/**
 * RunConfig is used to define run options for a mobile node
 */
@interface MobileRunConfig : NSObject <goSeqRefInterface> {
}
@property(strong, readonly) _Nonnull id _ref;

- (nonnull instancetype)initWithRef:(_Nonnull id)ref;
- (nonnull instancetype)init;
@property (nonatomic) NSString* _Nonnull repoPath;
@property (nonatomic) BOOL debug;
@property (nonatomic) id<CoreCafeOutboxHandler> _Nullable cafeOutboxHandler;
@end

/**
 * SearchHandle is used to cancel an async search request
 */
@interface MobileSearchHandle : NSObject <goSeqRefInterface> {
}
@property(strong, readonly) _Nonnull id _ref;

- (nonnull instancetype)initWithRef:(_Nonnull id)ref;
- (nonnull instancetype)init;
@property (nonatomic) NSString* _Nonnull id_;
/**
 * Cancel is used to cancel the request
 */
- (void)cancel;
@end

/**
 * InitRepo calls core InitRepo
 */
FOUNDATION_EXPORT BOOL MobileInitRepo(MobileInitConfig* _Nullable config, NSError* _Nullable* _Nullable error);

/**
 * MigrateRepo calls core MigrateRepo
 */
FOUNDATION_EXPORT BOOL MobileMigrateRepo(MobileMigrateConfig* _Nullable config, NSError* _Nullable* _Nullable error);

/**
 * Create a gomobile compatible wrapper around Textile
 */
FOUNDATION_EXPORT MobileMobile* _Nullable MobileNewTextile(MobileRunConfig* _Nullable config, id<MobileMessenger> _Nullable messenger, NSError* _Nullable* _Nullable error);

/**
 * NewWallet creates a brand new wallet and returns its recovery phrase
 */
FOUNDATION_EXPORT NSString* _Nonnull MobileNewWallet(long wordCount, NSError* _Nullable* _Nullable error);

/**
 * WalletAccountAt derives the account at the given index
 */
FOUNDATION_EXPORT NSData* _Nullable MobileWalletAccountAt(NSString* _Nullable mnemonic, long index, NSString* _Nullable passphrase, NSError* _Nullable* _Nullable error);

@class MobileCallback;

@class MobileDataCallback;

@class MobileMessenger;

@class MobileProtoCallback;

/**
 * Callback is used for asyc methods
 */
@interface MobileCallback : NSObject <goSeqRefInterface, MobileCallback> {
}
@property(strong, readonly) _Nonnull id _ref;

- (nonnull instancetype)initWithRef:(_Nonnull id)ref;
- (void)call:(NSError* _Nullable)err;
@end

/**
 * DataCallback is used for asyc methods that deliver raw data
 */
@interface MobileDataCallback : NSObject <goSeqRefInterface, MobileDataCallback> {
}
@property(strong, readonly) _Nonnull id _ref;

- (nonnull instancetype)initWithRef:(_Nonnull id)ref;
- (void)call:(NSData* _Nullable)data media:(NSString* _Nullable)media err:(NSError* _Nullable)err;
@end

/**
 * Messenger is a push mechanism to the bridge
 */
@interface MobileMessenger : NSObject <goSeqRefInterface, MobileMessenger> {
}
@property(strong, readonly) _Nonnull id _ref;

- (nonnull instancetype)initWithRef:(_Nonnull id)ref;
- (void)notify:(MobileEvent* _Nullable)event;
@end

/**
 * ProtoCallback is used for asyc methods that deliver a protobuf message
 */
@interface MobileProtoCallback : NSObject <goSeqRefInterface, MobileProtoCallback> {
}
@property(strong, readonly) _Nonnull id _ref;

- (nonnull instancetype)initWithRef:(_Nonnull id)ref;
- (void)call:(NSData* _Nullable)msg err:(NSError* _Nullable)err;
@end

#endif
