export const id = 65;
export const ids = [65];
export const modules = {
  41118: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      recoverReplayTails: () => vW
    });
    var mW = OW(41028),
      EW = OW(39),
      NW = OW(41014),
      PW = OW(40999),
      LW = OW(41021),
      cW = OW(1194);
    const wW = 35e3;
    async function tW(WW, iW, OW) {
      const mW = {
          token: WW.token,
          sequence: iW
        },
        EW = (0, cW.t)(wW),
        NW = void 0 === OW ? EW : (0, cW.m)([OW, EW]);
      let PW = !1;
      try {
        const iW = await fetch(WW.releaseUrl, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain"
          },
          body: JSON.stringify(mW),
          signal: NW
        });
        if (503 === iW.status) {
          const {
            reason: WW
          } = await iW.json();
          PW = "release_retrying" === WW || "shutting_down" === WW
        }
        if (!iW.ok) throw new Error(`HTTP ${iW.status}`);
        const OW = await iW.json();
        return "stored" === OW.outcome ? OW.stored : null
      } catch (LW) {
        if (NW.aborted || PW) throw LW;
        return console.warn(`Session replay couldn't ask the part joiner about video segment ${iW}; uploading it from the journal.`, LW), null
      }
    }
    var ZW = OW(41056),
      xW = OW(41084),
      lW = OW(5397),
      AW = OW(41063);
    async function bW(WW, iW, OW) {
      if (!WW.mayStartUpload()) return "retryLater";
      const {
        kind: mW,
        sequence: EW,
        contentType: NW
      } = OW;
      let PW;
      try {
        PW = await OW.bytes()
      } catch (LW) {
        return console.warn(`Session replay couldn't mux late ${mW} segment ${EW}; skipping it.`, LW), "refused"
      }
      try {
        const OW = WW.transportFor(iW),
          LW = await OW.requestPutUrl({
            uploadToken: iW.uploadToken,
            kind: mW,
            sequence: EW,
            contentType: NW,
            byteLength: PW.byteLength,
            late: !0
          });
        return "rejected" in LW ? (console.warn(`Session replay late ${mW} segment ${EW} refused: ${LW.reason}`), LW.retryable ? "retryLater" : "refused") : (await OW.put(LW.uploadUrl, PW, NW, LW.ifNoneMatch), "uploaded")
      } catch (LW) {
        return console.warn(`Session replay late ${mW} segment ${EW} upload failed; trying again later.`, LW), "retryLater"
      }
    }
    async function jW(WW, iW, OW) {
      var mW;
      const EW = WW.nowMs(),
        NW = (null !== (mW = OW.domSegments) && void 0 !== mW ? mW : []).filter((WW => WW.endMs <= EW));
      for (const PW of [...OW.videoSegments, ...OW.telemetrySegments, ...NW]) OW.endedAtMs = Math.max(OW.endedAtMs, PW.endMs);
      for (const PW of (0, AW.f)({
          uploadToken: iW.uploadToken,
          manifest: OW,
          creatorGrants: [],
          late: !0
        })) {
        const OW = await WW.postManifest(iW, PW);
        if ("uploaded" !== OW) return OW
      }
      return "uploaded"
    }
    var UW = OW(41120),
      kW = OW(41142),
      sW = OW(41179),
      MW = OW(41205),
      KW = OW(41190);
    class SW {
      constructor(WW, iW, OW, mW, EW) {
        this.frameDurationS = OW, this.onFragment = EW, this.firstTimestampUs = void 0, this.lastTimestampUs = void 0, this.output = void 0, this.source = void 0, this.pending = void 0, this.chunkCount = 0, this.boxes = [], this.addingTimestampUs = null, this.firstTimestampUs = iW, this.lastTimestampUs = iW;
        const NW = WW => {
          this.boxes.push(WW)
        };
        this.output = new UW.c({
          format: new kW.h({
            fastStart: "fragmented",
            minimumFragmentDuration: mW,
            onFtyp: NW,
            onMoov: NW,
            onMoof: NW,
            onMdat: WW => {
              NW(WW), this.fragmentDone()
            }
          }),
          target: new sW.f
        }), this.source = new MW.k(WW), this.output.addVideoTrack(this.source), this.pending = this.output.start()
      }
      get durationUs() {
        return this.lastTimestampUs - this.firstTimestampUs
      }
      add(WW, iW) {
        const OW = new Uint8Array(WW.byteLength);
        WW.copyTo(OW), this.addData(OW, WW.type, WW.timestamp, iW)
      }
      addData(WW, iW, OW, mW) {
        const EW = new KW.c(WW, iW, (OW - this.firstTimestampUs) / 1e6, this.frameDurationS),
          NW = 0 === this.chunkCount++;
        this.lastTimestampUs = Math.max(this.lastTimestampUs, OW), this.pending = this.pending.then((() => (this.addingTimestampUs = OW, this.source.add(EW, NW ? {
          decoderConfig: mW
        } : void 0))))
      }
      async finish() {
        await this.pending, this.addingTimestampUs = null, await this.output.finalize()
      }
      fragmentDone() {
        var WW;
        const iW = YW(this.boxes);
        this.boxes = [], this.onFragment({
          bytes: iW,
          endUs: null !== (WW = this.addingTimestampUs) && void 0 !== WW ? WW : this.lastTimestampUs + 1e6 * this.frameDurationS
        })
      }
    }

    function YW(WW) {
      const iW = new Uint8Array(WW.reduce(((WW, iW) => WW + iW.byteLength), 0));
      let OW = 0;
      for (const mW of WW) iW.set(mW, OW), OW += mW.byteLength;
      return iW
    }
    OW(41052);

    function yW(WW, iW, OW, mW) {
      const EW = WW / 1e3 + OW;
      return {
        startMs: EW,
        endMs: EW + iW / 1e3 + 1e3 / mW
      }
    }
    const TW = 2,
      JW = 18e5;

    function hW(WW, iW) {
      const OW = iW[iW.length - 1].timestampUs - WW.firstTimestampUs,
        {
          startMs: mW,
          endMs: EW
        } = yW(WW.firstTimestampUs, OW, WW.epochOffsetMs, WW.fps);
      return {
        startMs: Math.round(mW),
        endMs: Math.round(EW),
        width: WW.width,
        height: WW.height,
        codec: WW.codec
      }
    }
    async function HW(WW, iW) {
      const OW = [],
        mW = new SW(WW.containerCodec, WW.firstTimestampUs, 1 / WW.fps, TW, (WW => {
          let {
            bytes: iW
          } = WW;
          OW.push(iW)
        }));
      for (const EW of iW) mW.addData(EW.data, EW.key ? "key" : "delta", EW.timestampUs, WW.decoderConfig);
      return await mW.finish(), YW(OW).buffer
    }

    function nW(WW, iW, OW) {
      var mW;
      const EW = null === (mW = WW.videoProgress) || void 0 === mW ? void 0 : mW.find((WW => WW.segmentId === iW));
      return void 0 !== EW && (null === OW || EW.partsLanded > OW.partsLanded) ? EW : OW
    }
    const uW = 6e5;
    async function oW(WW, iW) {
      const OW = {
        recordingId: iW.recordingId,
        outcome: "nothing",
        videoSegments: 0,
        telemetrySegments: 0,
        domSegments: 0
      };
      if (WW.nowMs() > WW.lateUploadUntilMs(iW) - uW) return {
        ...OW,
        outcome: "expired"
      };
      const mW = new Set;
      let EW;
      try {
        EW = await async function(WW, iW, OW, mW) {
          const {
            partJoiner: EW
          } = iW;
          if (void 0 === EW) return OW;
          const NW = WW.nowMs() > iW.manifest.endedAtMs + JW,
            PW = new Map;
          for (const {
              header: cW,
              sequence: wW,
              progress: tW
            }
            of OW.video)
            if (null !== wW && null === nW(iW, cW.segmentId, tW)) {
              let iW;
              try {
                iW = await WW.releaseJoined(EW, wW)
              } catch (LW) {
                if (!NW) {
                  mW.add(cW.segmentId);
                  continue
                }
                console.warn(`Session replay's part joiner didn't answer about video segment ${wW} in time; uploading it from the journal.`, LW), iW = null
              }
              null !== iW && PW.set(cW.segmentId, iW)
            } return {
            ...OW,
            joined: PW
          }
        }(WW, iW, await WW.store.read(iW), mW)
      } catch (UW) {
        return console.warn(`Session replay couldn't read what an earlier page load left of ${iW.recordingId}; trying again later.`, UW), {
          ...OW,
          outcome: "retryLater"
        }
      }
      const NW = [],
        PW = {
          ...iW.manifest,
          videoSegments: [],
          telemetrySegments: [],
          ...EW.dom.length + EW.domTails.length > 0 ? {
            domSegments: NW
          } : {}
        },
        LW = () => PW.videoSegments.length + PW.telemetrySegments.length + NW.length > 0,
        cW = function(WW, iW) {
          let OW = WW.video.reduce(((WW, iW) => {
            let {
              sequence: OW
            } = iW;
            return null === OW ? WW : Math.max(WW, OW + 1)
          }), iW.nextVideoSequence);
          return {
            segments: [...WW.video].sort(((WW, iW) => WW.header.segmentId - iW.header.segmentId)).map((mW => {
              var EW, NW, PW;
              let {
                header: LW,
                sequence: cW,
                progress: wW,
                chunks: tW
              } = mW;
              const ZW = nW(iW, LW.segmentId, wW),
                xW = null === (EW = WW.joined) || void 0 === EW ? void 0 : EW.get(LW.segmentId),
                lW = null !== cW && void 0 !== xW ? {
                  sequence: cW,
                  ...xW.meta
                } : null !== cW && null !== ZW ? {
                  sequence: cW,
                  ...ZW.meta,
                  startMs: Math.round(ZW.meta.startMs),
                  endMs: Math.round(ZW.meta.endMs),
                  parts: ZW.partsLanded
                } : null,
                AW = null !== (NW = null !== (PW = null === xW || void 0 === xW ? void 0 : xW.completeUntilUs) && void 0 !== PW ? PW : null === ZW || void 0 === ZW ? void 0 : ZW.completeUntilUs) && void 0 !== NW ? NW : null,
                bW = function(WW) {
                  const iW = [...WW].sort(((WW, iW) => WW.index - iW.index)),
                    OW = [];
                  for (const mW of iW) {
                    if (0 === OW.length ? !mW.key : mW.index !== OW[0].index + OW.length) break;
                    OW.push(mW)
                  }
                  return OW
                }(null === AW ? tW : tW.filter((WW => WW.timestampUs >= AW))),
                jW = 0 === bW.length ? null : {
                  sequence: OW++,
                  header: {
                    ...LW,
                    firstTimestampUs: bW[0].timestampUs
                  },
                  chunks: bW
                };
              return {
                segmentId: LW.segmentId,
                landed: lW,
                tail: jW
              }
            })),
            nextSequence: OW
          }
        }(EW, iW),
        wW = function(WW, iW) {
          var OW;
          let mW = WW.dom.reduce(((WW, iW) => {
            let {
              sequence: OW
            } = iW;
            return Math.max(WW, OW + 1)
          }), null !== (OW = iW.nextDomSequence) && void 0 !== OW ? OW : 0);
          const EW = [...WW.domTails].sort(((WW, iW) => WW.chunkIndex - iW.chunkIndex || WW.fromChar - iW.fromChar)),
            NW = [];
          for (const PW of EW) {
            const WW = NW[NW.length - 1],
              iW = (null === WW || void 0 === WW ? void 0 : WW.chunkIndex) === PW.chunkIndex;
            PW.fromChar === (iW ? WW.text.length : 0) && (iW ? (WW.text += PW.text, WW.last = PW) : NW.push({
              chunkIndex: PW.chunkIndex,
              sequence: mW++,
              text: PW.text,
              last: PW
            }))
          }
          return {
            tails: NW,
            nextSequence: mW
          }
        }(EW, iW),
        tW = {
          videoSegmentIds: [],
          telemetrySequences: [],
          domSequences: [],
          domTailChunks: []
        };
      let ZW = !1;
      const xW = async EW => {
        if (LW()) {
          const LW = await jW(WW, iW, PW);
          if ("retryLater" === EW && "uploaded" === LW) try {
            var NW;
            const OW = wW.tails.find((WW => {
                let {
                  chunkIndex: iW
                } = WW;
                return !tW.domTailChunks.includes(iW)
              })),
              mW = null !== (NW = null === OW || void 0 === OW ? void 0 : OW.sequence) && void 0 !== NW ? NW : wW.nextSequence;
            await WW.store.forgetSent({
              ...iW,
              nextVideoSequence: cW.nextSequence,
              nextDomSequence: mW
            }, tW)
          } catch (UW) {
            console.warn(`Session replay couldn't drop what it sent of ${iW.recordingId} from its journal.`, UW)
          }
          if ("refused" === LW && mW.size > 0) return {
            ...OW,
            outcome: "refused"
          }
        }
        return {
          ...OW,
          outcome: EW
        }
      };
      for (const {
          segmentId: jW,
          landed: kW,
          tail: sW
        }
        of cW.segments)
        if (!mW.has(jW)) {
          if (null !== kW && PW.videoSegments.push(kW), null !== sW) {
            const mW = await bW(WW, iW, {
              kind: "video",
              sequence: sW.sequence,
              contentType: "video/mp4",
              bytes: () => WW.mux(sW.header, sW.chunks)
            });
            if ("retryLater" === mW) return await xW(mW);
            "refused" === mW ? ZW = !0 : (PW.videoSegments.push({
              sequence: sW.sequence,
              ...hW(sW.header, sW.chunks)
            }), OW.videoSegments++)
          }
          tW.videoSegmentIds.push(jW)
        } const lW = [...EW.telemetry].sort(((WW, iW) => WW.sequence - iW.sequence));
      for (const jW of lW) {
        const mW = jW.landed ? "uploaded" : await bW(WW, iW, {
          kind: "telemetry",
          sequence: jW.sequence,
          contentType: "application/octet-stream",
          bytes: async () => jW.bytes
        });
        if ("retryLater" === mW) return await xW(mW);
        tW.telemetrySequences.push(jW.sequence), "refused" !== mW ? (PW.telemetrySegments.push({
          sequence: jW.sequence,
          startMs: Math.round(jW.startMs),
          endMs: Math.round(jW.endMs)
        }), OW.telemetrySegments++) : ZW = !0
      }
      const AW = [...EW.dom].sort(((WW, iW) => WW.sequence - iW.sequence));
      for (const {
          sequence: jW,
          chunk: kW,
          bytes: sW
        }
        of AW) {
        const mW = null === sW ? "uploaded" : await bW(WW, iW, {
          kind: "dom",
          sequence: jW,
          contentType: "application/octet-stream",
          bytes: async () => sW
        });
        if ("retryLater" === mW) return await xW(mW);
        tW.domSequences.push(jW), NW.push({
          sequence: jW,
          ...kW
        }), "uploaded" === mW && OW.domSegments++
      }
      for (const {
          chunkIndex: jW,
          sequence: kW,
          text: sW,
          last: MW
        }
        of wW.tails) {
        let mW;
        const EW = await bW(WW, iW, {
          kind: "dom",
          sequence: kW,
          contentType: "application/octet-stream",
          bytes: async () => (mW = await WW.packDom(sW), mW.bytes.buffer)
        });
        if ("retryLater" === EW) return await xW(EW);
        if (tW.domTailChunks.push(jW), "refused" === EW) {
          ZW = !0;
          continue
        }
        const {
          bytes: PW,
          inflatedBytes: LW
        } = mW, {
          startMs: cW,
          endMs: wW,
          summary: lW
        } = MW;
        NW.push({
          sequence: kW,
          startMs: cW,
          endMs: wW,
          byteLength: PW.byteLength,
          summary: {
            ...lW,
            size: LW
          }
        }), OW.domSegments++
      }
      return mW.size > 0 ? await xW("retryLater") : LW() ? {
        ...OW,
        outcome: await jW(WW, iW, PW)
      } : ZW ? {
        ...OW,
        outcome: "refused"
      } : OW
    }
    var dW = OW(41041),
      eW = OW(41067);
    async function vW() {
      const WW = "undefined" === typeof navigator ? void 0 : navigator.locks;
      if (!xW.d.supported || void 0 === WW) return;
      const iW = new xW.d,
        OW = new dW.e,
        cW = new NW.d,
        wW = await async function(WW) {
          const iW = [];
          for (const mW of await WW.store.listRecordings()) {
            let EW = {
              recordingId: mW.recordingId,
              outcome: "live",
              videoSegments: 0,
              telemetrySegments: 0,
              domSegments: 0
            };
            try {
              await WW.withLock(mW.recordingId, (async () => {
                const iW = (await WW.store.listRecordings()).find((WW => {
                  let {
                    recordingId: iW
                  } = WW;
                  return iW === mW.recordingId
                }));
                if (void 0 !== iW) {
                  try {
                    EW = await oW(WW, iW)
                  } catch (OW) {
                    console.warn(`Session replay couldn't recover what an earlier page load left of ${mW.recordingId}; forgetting it.`, OW), EW = {
                      ...EW,
                      outcome: "failed"
                    }
                  }
                  "retryLater" !== EW.outcome && await WW.store.deleteRecording(mW.recordingId)
                } else EW = {
                  ...EW,
                  outcome: "nothing"
                }
              }))
            } catch (OW) {
              console.warn(`Session replay couldn't forget ${mW.recordingId}'s journal.`, OW)
            }
            iW.push(EW)
          }
          return iW
        }({
          store: iW,
          transportFor: WW => {
            var iW;
            return new eW.f((null !== (iW = WW.endpoints) && void 0 !== iW ? iW : (0, LW.d)()).segmentUploadUrl, {
              relay: OW.for(WW)
            })
          },
          postManifest: (WW, iW) => {
            var OW;
            return (0, ZW.b)((null !== (OW = WW.endpoints) && void 0 !== OW ? OW : (0, LW.d)()).manifestUrl, iW)
          },
          withLock: async (iW, OW) => {
            await WW.request((0, lW.u)(iW), {
              ifAvailable: !0
            }, (async WW => {
              null !== WW && await OW()
            }))
          },
          mux: HW,
          packDom: WW => cW.pack(WW).catch((() => (0, PW.d)(WW))),
          releaseJoined: tW,
          nowMs: Date.now,
          lateUploadUntilMs: WW => {
            var iW;
            return null !== (iW = WW.lateUploadUntilMs) && void 0 !== iW ? iW : WW.expiresAtMs + mW.e
          },
          mayStartUpload: () => !0
        }).finally((() => {
          cW.close()
        }));
      for (const mW of wW) "live" !== mW.outcome && console.info(`Session replay: ${mW.outcome} what an earlier page load left of ${mW.recordingId} (${mW.videoSegments} video, ${mW.telemetrySegments} telemetry, ${mW.domSegments} page recording).`);
      0 === (await iW.listRecordings()).length && EW.i.removeItem(lW.j)
    }
  },
  41185: () => {}
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);