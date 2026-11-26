export const id = 64;
export const ids = [64];
export const modules = {
  40567: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      recoverReplayTails: () => LB
    });
    var YB = GB(40469),
      DB = GB(31),
      QB = GB(40457),
      oB = GB(40432),
      jB = GB(40464),
      yB = GB(1200);
    const JB = 35e3;
    async function MB(BB, OB, GB) {
      const YB = {
          token: BB.token,
          sequence: OB
        },
        DB = (0, yB.t)(JB),
        QB = void 0 === GB ? DB : (0, yB.p)([GB, DB]);
      let oB = !1;
      try {
        const OB = await fetch(BB.releaseUrl, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain"
          },
          body: JSON.stringify(YB),
          signal: QB
        });
        if (503 === OB.status) {
          const {
            reason: BB
          } = await OB.json();
          oB = "release_retrying" === BB || "shutting_down" === BB
        }
        if (!OB.ok) throw new Error(`HTTP ${OB.status}`);
        const GB = await OB.json();
        return "stored" === GB.outcome ? GB.stored : null
      } catch (jB) {
        if (QB.aborted || oB) throw jB;
        return console.warn(`Session replay couldn't ask the part joiner about video segment ${OB}; uploading it from the journal.`, jB), null
      }
    }
    var PB = GB(40505),
      zB = GB(40537),
      lB = GB(5122),
      pB = GB(40514);
    async function qB(BB, OB, GB) {
      if (!BB.mayStartUpload()) return "retryLater";
      const {
        kind: YB,
        sequence: DB,
        contentType: QB
      } = GB;
      let oB;
      try {
        oB = await GB.bytes()
      } catch (jB) {
        return console.warn(`Session replay couldn't mux late ${YB} segment ${DB}; skipping it.`, jB), "refused"
      }
      try {
        const GB = BB.transportFor(OB),
          jB = await GB.requestPutUrl({
            uploadToken: OB.uploadToken,
            kind: YB,
            sequence: DB,
            contentType: QB,
            byteLength: oB.byteLength,
            late: !0
          });
        return "rejected" in jB ? (console.warn(`Session replay late ${YB} segment ${DB} refused: ${jB.reason}`), jB.retryable ? "retryLater" : "refused") : (await GB.put(jB.uploadUrl, oB, QB, jB.ifNoneMatch), "uploaded")
      } catch (jB) {
        return console.warn(`Session replay late ${YB} segment ${DB} upload failed; trying again later.`, jB), "retryLater"
      }
    }
    async function ZB(BB, OB, GB) {
      var YB;
      const DB = BB.nowMs(),
        QB = (null !== (YB = GB.domSegments) && void 0 !== YB ? YB : []).filter((BB => BB.endMs <= DB));
      for (const oB of [...GB.videoSegments, ...GB.telemetrySegments, ...QB]) GB.endedAtMs = Math.max(GB.endedAtMs, oB.endMs);
      for (const oB of (0, pB.g)({
          uploadToken: OB.uploadToken,
          manifest: GB,
          creatorGrants: [],
          late: !0
        })) {
        const GB = await BB.postManifest(OB, oB);
        if ("uploaded" !== GB) return GB
      }
      return "uploaded"
    }
    var NB = GB(40572),
      RB = GB(40589),
      WB = GB(40641),
      AB = GB(40669),
      VB = GB(40650);
    class SB {
      constructor(BB, OB, GB, YB, DB) {
        this.frameDurationS = GB, this.onFragment = DB, this.firstTimestampUs = void 0, this.lastTimestampUs = void 0, this.output = void 0, this.source = void 0, this.pending = void 0, this.chunkCount = 0, this.boxes = [], this.addingTimestampUs = null, this.firstTimestampUs = OB, this.lastTimestampUs = OB;
        const QB = BB => {
          this.boxes.push(BB)
        };
        this.output = new NB.e({
          format: new RB.g({
            fastStart: "fragmented",
            minimumFragmentDuration: YB,
            onFtyp: QB,
            onMoov: QB,
            onMoof: QB,
            onMdat: BB => {
              QB(BB), this.fragmentDone()
            }
          }),
          target: new WB.e
        }), this.source = new AB.i(BB), this.output.addVideoTrack(this.source), this.pending = this.output.start()
      }
      get durationUs() {
        return this.lastTimestampUs - this.firstTimestampUs
      }
      add(BB, OB) {
        const GB = new Uint8Array(BB.byteLength);
        BB.copyTo(GB), this.addData(GB, BB.type, BB.timestamp, OB)
      }
      addData(BB, OB, GB, YB) {
        const DB = new VB.d(BB, OB, (GB - this.firstTimestampUs) / 1e6, this.frameDurationS),
          QB = 0 === this.chunkCount++;
        this.lastTimestampUs = Math.max(this.lastTimestampUs, GB), this.pending = this.pending.then((() => (this.addingTimestampUs = GB, this.source.add(DB, QB ? {
          decoderConfig: YB
        } : void 0))))
      }
      async finish() {
        await this.pending, this.addingTimestampUs = null, await this.output.finalize()
      }
      fragmentDone() {
        var BB;
        const OB = nB(this.boxes);
        this.boxes = [], this.onFragment({
          bytes: OB,
          endUs: null !== (BB = this.addingTimestampUs) && void 0 !== BB ? BB : this.lastTimestampUs + 1e6 * this.frameDurationS
        })
      }
    }

    function nB(BB) {
      const OB = new Uint8Array(BB.reduce(((BB, OB) => BB + OB.byteLength), 0));
      let GB = 0;
      for (const YB of BB) OB.set(YB, GB), GB += YB.byteLength;
      return OB
    }
    GB(40497);

    function UB(BB, OB, GB, YB) {
      const DB = BB / 1e3 + GB;
      return {
        startMs: DB,
        endMs: DB + OB / 1e3 + 1e3 / YB
      }
    }
    const fB = 2,
      kB = 18e5;

    function dB(BB, OB) {
      const GB = OB[OB.length - 1].timestampUs - BB.firstTimestampUs,
        {
          startMs: YB,
          endMs: DB
        } = UB(BB.firstTimestampUs, GB, BB.epochOffsetMs, BB.fps);
      return {
        startMs: Math.round(YB),
        endMs: Math.round(DB),
        width: BB.width,
        height: BB.height,
        codec: BB.codec
      }
    }
    async function KB(BB, OB) {
      const GB = [],
        YB = new SB(BB.containerCodec, BB.firstTimestampUs, 1 / BB.fps, fB, (BB => {
          let {
            bytes: OB
          } = BB;
          GB.push(OB)
        }));
      for (const DB of OB) YB.addData(DB.data, DB.key ? "key" : "delta", DB.timestampUs, BB.decoderConfig);
      return await YB.finish(), nB(GB).buffer
    }

    function uB(BB, OB, GB) {
      var YB;
      const DB = null === (YB = BB.videoProgress) || void 0 === YB ? void 0 : YB.find((BB => BB.segmentId === OB));
      return void 0 !== DB && (null === GB || DB.partsLanded > GB.partsLanded) ? DB : GB
    }
    const mB = 6e5;
    async function IB(BB, OB) {
      const GB = {
        recordingId: OB.recordingId,
        outcome: "nothing",
        videoSegments: 0,
        telemetrySegments: 0,
        domSegments: 0
      };
      if (BB.nowMs() > BB.lateUploadUntilMs(OB) - mB) return {
        ...GB,
        outcome: "expired"
      };
      const YB = new Set;
      let DB;
      try {
        DB = await async function(BB, OB, GB, YB) {
          const {
            partJoiner: DB
          } = OB;
          if (void 0 === DB) return GB;
          const QB = BB.nowMs() > OB.manifest.endedAtMs + kB,
            oB = new Map;
          for (const {
              header: yB,
              sequence: JB,
              progress: MB
            }
            of GB.video)
            if (null !== JB && null === uB(OB, yB.segmentId, MB)) {
              let OB;
              try {
                OB = await BB.releaseJoined(DB, JB)
              } catch (jB) {
                if (!QB) {
                  YB.add(yB.segmentId);
                  continue
                }
                console.warn(`Session replay's part joiner didn't answer about video segment ${JB} in time; uploading it from the journal.`, jB), OB = null
              }
              null !== OB && oB.set(yB.segmentId, OB)
            } return {
            ...GB,
            joined: oB
          }
        }(BB, OB, await BB.store.read(OB), YB)
      } catch (NB) {
        return console.warn(`Session replay couldn't read what an earlier page load left of ${OB.recordingId}; trying again later.`, NB), {
          ...GB,
          outcome: "retryLater"
        }
      }
      const QB = [],
        oB = {
          ...OB.manifest,
          videoSegments: [],
          telemetrySegments: [],
          ...DB.dom.length + DB.domTails.length > 0 ? {
            domSegments: QB
          } : {}
        },
        jB = () => oB.videoSegments.length + oB.telemetrySegments.length + QB.length > 0,
        yB = function(BB, OB) {
          let GB = BB.video.reduce(((BB, OB) => {
            let {
              sequence: GB
            } = OB;
            return null === GB ? BB : Math.max(BB, GB + 1)
          }), OB.nextVideoSequence);
          return {
            segments: [...BB.video].sort(((BB, OB) => BB.header.segmentId - OB.header.segmentId)).map((YB => {
              var DB, QB, oB;
              let {
                header: jB,
                sequence: yB,
                progress: JB,
                chunks: MB
              } = YB;
              const PB = uB(OB, jB.segmentId, JB),
                zB = null === (DB = BB.joined) || void 0 === DB ? void 0 : DB.get(jB.segmentId),
                lB = null !== yB && void 0 !== zB ? {
                  sequence: yB,
                  ...zB.meta
                } : null !== yB && null !== PB ? {
                  sequence: yB,
                  ...PB.meta,
                  startMs: Math.round(PB.meta.startMs),
                  endMs: Math.round(PB.meta.endMs),
                  parts: PB.partsLanded
                } : null,
                pB = null !== (QB = null !== (oB = null === zB || void 0 === zB ? void 0 : zB.completeUntilUs) && void 0 !== oB ? oB : null === PB || void 0 === PB ? void 0 : PB.completeUntilUs) && void 0 !== QB ? QB : null,
                qB = function(BB) {
                  const OB = [...BB].sort(((BB, OB) => BB.index - OB.index)),
                    GB = [];
                  for (const YB of OB) {
                    if (0 === GB.length ? !YB.key : YB.index !== GB[0].index + GB.length) break;
                    GB.push(YB)
                  }
                  return GB
                }(null === pB ? MB : MB.filter((BB => BB.timestampUs >= pB))),
                ZB = 0 === qB.length ? null : {
                  sequence: GB++,
                  header: {
                    ...jB,
                    firstTimestampUs: qB[0].timestampUs
                  },
                  chunks: qB
                };
              return {
                segmentId: jB.segmentId,
                landed: lB,
                tail: ZB
              }
            })),
            nextSequence: GB
          }
        }(DB, OB),
        JB = function(BB, OB) {
          var GB;
          let YB = BB.dom.reduce(((BB, OB) => {
            let {
              sequence: GB
            } = OB;
            return Math.max(BB, GB + 1)
          }), null !== (GB = OB.nextDomSequence) && void 0 !== GB ? GB : 0);
          const DB = [...BB.domTails].sort(((BB, OB) => BB.chunkIndex - OB.chunkIndex || BB.fromChar - OB.fromChar)),
            QB = [];
          for (const oB of DB) {
            const BB = QB[QB.length - 1],
              OB = (null === BB || void 0 === BB ? void 0 : BB.chunkIndex) === oB.chunkIndex;
            oB.fromChar === (OB ? BB.text.length : 0) && (OB ? (BB.text += oB.text, BB.last = oB) : QB.push({
              chunkIndex: oB.chunkIndex,
              sequence: YB++,
              text: oB.text,
              last: oB
            }))
          }
          return {
            tails: QB,
            nextSequence: YB
          }
        }(DB, OB),
        MB = {
          videoSegmentIds: [],
          telemetrySequences: [],
          domSequences: [],
          domTailChunks: []
        };
      let PB = !1;
      const zB = async DB => {
        if (jB()) {
          const jB = await ZB(BB, OB, oB);
          if ("retryLater" === DB && "uploaded" === jB) try {
            var QB;
            const GB = JB.tails.find((BB => {
                let {
                  chunkIndex: OB
                } = BB;
                return !MB.domTailChunks.includes(OB)
              })),
              YB = null !== (QB = null === GB || void 0 === GB ? void 0 : GB.sequence) && void 0 !== QB ? QB : JB.nextSequence;
            await BB.store.forgetSent({
              ...OB,
              nextVideoSequence: yB.nextSequence,
              nextDomSequence: YB
            }, MB)
          } catch (NB) {
            console.warn(`Session replay couldn't drop what it sent of ${OB.recordingId} from its journal.`, NB)
          }
          if ("refused" === jB && YB.size > 0) return {
            ...GB,
            outcome: "refused"
          }
        }
        return {
          ...GB,
          outcome: DB
        }
      };
      for (const {
          segmentId: ZB,
          landed: RB,
          tail: WB
        }
        of yB.segments)
        if (!YB.has(ZB)) {
          if (null !== RB && oB.videoSegments.push(RB), null !== WB) {
            const YB = await qB(BB, OB, {
              kind: "video",
              sequence: WB.sequence,
              contentType: "video/mp4",
              bytes: () => BB.mux(WB.header, WB.chunks)
            });
            if ("retryLater" === YB) return await zB(YB);
            "refused" === YB ? PB = !0 : (oB.videoSegments.push({
              sequence: WB.sequence,
              ...dB(WB.header, WB.chunks)
            }), GB.videoSegments++)
          }
          MB.videoSegmentIds.push(ZB)
        } const lB = [...DB.telemetry].sort(((BB, OB) => BB.sequence - OB.sequence));
      for (const ZB of lB) {
        const YB = ZB.landed ? "uploaded" : await qB(BB, OB, {
          kind: "telemetry",
          sequence: ZB.sequence,
          contentType: "application/octet-stream",
          bytes: async () => ZB.bytes
        });
        if ("retryLater" === YB) return await zB(YB);
        MB.telemetrySequences.push(ZB.sequence), "refused" !== YB ? (oB.telemetrySegments.push({
          sequence: ZB.sequence,
          startMs: Math.round(ZB.startMs),
          endMs: Math.round(ZB.endMs)
        }), GB.telemetrySegments++) : PB = !0
      }
      const pB = [...DB.dom].sort(((BB, OB) => BB.sequence - OB.sequence));
      for (const {
          sequence: ZB,
          chunk: RB,
          bytes: WB
        }
        of pB) {
        const YB = null === WB ? "uploaded" : await qB(BB, OB, {
          kind: "dom",
          sequence: ZB,
          contentType: "application/octet-stream",
          bytes: async () => WB
        });
        if ("retryLater" === YB) return await zB(YB);
        MB.domSequences.push(ZB), QB.push({
          sequence: ZB,
          ...RB
        }), "uploaded" === YB && GB.domSegments++
      }
      for (const {
          chunkIndex: ZB,
          sequence: RB,
          text: WB,
          last: AB
        }
        of JB.tails) {
        let YB;
        const DB = await qB(BB, OB, {
          kind: "dom",
          sequence: RB,
          contentType: "application/octet-stream",
          bytes: async () => (YB = await BB.packDom(WB), YB.bytes.buffer)
        });
        if ("retryLater" === DB) return await zB(DB);
        if (MB.domTailChunks.push(ZB), "refused" === DB) {
          PB = !0;
          continue
        }
        const {
          bytes: oB,
          inflatedBytes: jB
        } = YB, {
          startMs: yB,
          endMs: JB,
          summary: lB
        } = AB;
        QB.push({
          sequence: RB,
          startMs: yB,
          endMs: JB,
          byteLength: oB.byteLength,
          summary: {
            ...lB,
            size: jB
          }
        }), GB.domSegments++
      }
      return YB.size > 0 ? await zB("retryLater") : jB() ? {
        ...GB,
        outcome: await ZB(BB, OB, oB)
      } : PB ? {
        ...GB,
        outcome: "refused"
      } : GB
    }
    var FB = GB(40482),
      iB = GB(40520);
    async function LB() {
      const BB = "undefined" === typeof navigator ? void 0 : navigator.locks;
      if (!zB.c.supported || void 0 === BB) return;
      const OB = new zB.c,
        GB = new FB.e,
        yB = new QB.b,
        JB = await async function(BB) {
          const OB = [];
          for (const YB of await BB.store.listRecordings()) {
            let DB = {
              recordingId: YB.recordingId,
              outcome: "live",
              videoSegments: 0,
              telemetrySegments: 0,
              domSegments: 0
            };
            try {
              await BB.withLock(YB.recordingId, (async () => {
                const OB = (await BB.store.listRecordings()).find((BB => {
                  let {
                    recordingId: OB
                  } = BB;
                  return OB === YB.recordingId
                }));
                if (void 0 !== OB) {
                  try {
                    DB = await IB(BB, OB)
                  } catch (GB) {
                    console.warn(`Session replay couldn't recover what an earlier page load left of ${YB.recordingId}; forgetting it.`, GB), DB = {
                      ...DB,
                      outcome: "failed"
                    }
                  }
                  "retryLater" !== DB.outcome && await BB.store.deleteRecording(YB.recordingId)
                } else DB = {
                  ...DB,
                  outcome: "nothing"
                }
              }))
            } catch (GB) {
              console.warn(`Session replay couldn't forget ${YB.recordingId}'s journal.`, GB)
            }
            OB.push(DB)
          }
          return OB
        }({
          store: OB,
          transportFor: BB => {
            var OB;
            return new iB.f((null !== (OB = BB.endpoints) && void 0 !== OB ? OB : (0, jB.e)()).segmentUploadUrl, {
              relay: GB.for(BB)
            })
          },
          postManifest: (BB, OB) => {
            var GB;
            return (0, PB.c)((null !== (GB = BB.endpoints) && void 0 !== GB ? GB : (0, jB.e)()).manifestUrl, OB)
          },
          withLock: async (OB, GB) => {
            await BB.request((0, lB.u)(OB), {
              ifAvailable: !0
            }, (async BB => {
              null !== BB && await GB()
            }))
          },
          mux: KB,
          packDom: BB => yB.pack(BB).catch((() => (0, oB.c)(BB))),
          releaseJoined: MB,
          nowMs: Date.now,
          lateUploadUntilMs: BB => {
            var OB;
            return null !== (OB = BB.lateUploadUntilMs) && void 0 !== OB ? OB : BB.expiresAtMs + YB.c
          },
          mayStartUpload: () => !0
        }).finally((() => {
          yB.close()
        }));
      for (const YB of JB) "live" !== YB.outcome && console.info(`Session replay: ${YB.outcome} what an earlier page load left of ${YB.recordingId} (${YB.videoSegments} video, ${YB.telemetrySegments} telemetry, ${YB.domSegments} page recording).`);
      0 === (await OB.listRecordings()).length && DB.g.removeItem(lB.m)
    }
  },
  40648: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);