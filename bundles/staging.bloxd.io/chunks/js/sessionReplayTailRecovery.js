export const id = 64;
export const ids = [64];
export const modules = {
  40811: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      recoverReplayTails: () => eH
    });
    var AH = LH(40735),
      rH = LH(30),
      SH = LH(40725),
      hH = LH(40704),
      tH = LH(40732),
      zH = LH(1148);
    const CH = 35e3;
    async function EH(HH, BH, LH) {
      const AH = {
          token: HH.token,
          sequence: BH
        },
        rH = (0, zH.u)(CH),
        SH = void 0 === LH ? rH : (0, zH.o)([LH, rH]);
      let hH = !1;
      try {
        const BH = await fetch(HH.releaseUrl, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain"
          },
          body: JSON.stringify(AH),
          signal: SH
        });
        if (503 === BH.status) {
          const {
            reason: HH
          } = await BH.json();
          hH = "release_retrying" === HH || "shutting_down" === HH
        }
        if (!BH.ok) throw new Error(`HTTP ${BH.status}`);
        const LH = await BH.json();
        return "stored" === LH.outcome ? LH.stored : null
      } catch (tH) {
        if (SH.aborted || hH) throw tH;
        return console.warn(`Session replay couldn't ask the part joiner about video segment ${BH}; uploading it from the journal.`, tH), null
      }
    }
    var XH = LH(40756),
      GH = LH(40785),
      YH = LH(5111),
      uH = LH(40760);
    async function QH(HH, BH, LH) {
      if (!HH.mayStartUpload()) return "retryLater";
      const {
        kind: AH,
        sequence: rH,
        contentType: SH
      } = LH;
      let hH;
      try {
        hH = await LH.bytes()
      } catch (tH) {
        return console.warn(`Session replay couldn't mux late ${AH} segment ${rH}; skipping it.`, tH), "refused"
      }
      try {
        const LH = HH.transportFor(BH),
          tH = await LH.requestPutUrl({
            uploadToken: BH.uploadToken,
            kind: AH,
            sequence: rH,
            contentType: SH,
            byteLength: hH.byteLength,
            late: !0
          });
        return "rejected" in tH ? (console.warn(`Session replay late ${AH} segment ${rH} refused: ${tH.reason}`), tH.retryable ? "retryLater" : "refused") : (await LH.put(tH.uploadUrl, hH, SH, tH.ifNoneMatch), "uploaded")
      } catch (tH) {
        return console.warn(`Session replay late ${AH} segment ${rH} upload failed; trying again later.`, tH), "retryLater"
      }
    }
    async function WH(HH, BH, LH) {
      var AH;
      const rH = HH.nowMs(),
        SH = (null !== (AH = LH.domSegments) && void 0 !== AH ? AH : []).filter((HH => HH.endMs <= rH));
      for (const hH of [...LH.videoSegments, ...LH.telemetrySegments, ...SH]) LH.endedAtMs = Math.max(LH.endedAtMs, hH.endMs);
      for (const hH of (0, uH.i)({
          uploadToken: BH.uploadToken,
          manifest: LH,
          creatorGrants: [],
          late: !0
        })) {
        const LH = await HH.postManifest(BH, hH);
        if ("uploaded" !== LH) return LH
      }
      return "uploaded"
    }
    var MH = LH(40818),
      xH = LH(40832),
      vH = LH(40888),
      PH = LH(40916),
      TH = LH(40900);
    class UH {
      constructor(HH, BH, LH, AH, rH) {
        this.frameDurationS = LH, this.onFragment = rH, this.firstTimestampUs = void 0, this.lastTimestampUs = void 0, this.output = void 0, this.source = void 0, this.pending = void 0, this.chunkCount = 0, this.boxes = [], this.addingTimestampUs = null, this.firstTimestampUs = BH, this.lastTimestampUs = BH;
        const SH = HH => {
          this.boxes.push(HH)
        };
        this.output = new MH.d({
          format: new xH.e({
            fastStart: "fragmented",
            minimumFragmentDuration: AH,
            onFtyp: SH,
            onMoov: SH,
            onMoof: SH,
            onMdat: HH => {
              SH(HH), this.fragmentDone()
            }
          }),
          target: new vH.g
        }), this.source = new PH.j(HH), this.output.addVideoTrack(this.source), this.pending = this.output.start()
      }
      get durationUs() {
        return this.lastTimestampUs - this.firstTimestampUs
      }
      add(HH, BH) {
        const LH = new Uint8Array(HH.byteLength);
        HH.copyTo(LH), this.addData(LH, HH.type, HH.timestamp, BH)
      }
      addData(HH, BH, LH, AH) {
        const rH = new TH.b(HH, BH, (LH - this.firstTimestampUs) / 1e6, this.frameDurationS),
          SH = 0 === this.chunkCount++;
        this.lastTimestampUs = Math.max(this.lastTimestampUs, LH), this.pending = this.pending.then((() => (this.addingTimestampUs = LH, this.source.add(rH, SH ? {
          decoderConfig: AH
        } : void 0))))
      }
      async finish() {
        await this.pending, this.addingTimestampUs = null, await this.output.finalize()
      }
      fragmentDone() {
        var HH;
        const BH = VH(this.boxes);
        this.boxes = [], this.onFragment({
          bytes: BH,
          endUs: null !== (HH = this.addingTimestampUs) && void 0 !== HH ? HH : this.lastTimestampUs + 1e6 * this.frameDurationS
        })
      }
    }

    function VH(HH) {
      const BH = new Uint8Array(HH.reduce(((HH, BH) => HH + BH.byteLength), 0));
      let LH = 0;
      for (const AH of HH) BH.set(AH, LH), LH += AH.byteLength;
      return BH
    }
    LH(40751);

    function OH(HH, BH, LH, AH) {
      const rH = HH / 1e3 + LH;
      return {
        startMs: rH,
        endMs: rH + BH / 1e3 + 1e3 / AH
      }
    }
    const bH = 2,
      kH = 18e5;

    function mH(HH, BH) {
      const LH = BH[BH.length - 1].timestampUs - HH.firstTimestampUs,
        {
          startMs: AH,
          endMs: rH
        } = OH(HH.firstTimestampUs, LH, HH.epochOffsetMs, HH.fps);
      return {
        startMs: Math.round(AH),
        endMs: Math.round(rH),
        width: HH.width,
        height: HH.height,
        codec: HH.codec
      }
    }
    async function oH(HH, BH) {
      const LH = [],
        AH = new UH(HH.containerCodec, HH.firstTimestampUs, 1 / HH.fps, bH, (HH => {
          let {
            bytes: BH
          } = HH;
          LH.push(BH)
        }));
      for (const rH of BH) AH.addData(rH.data, rH.key ? "key" : "delta", rH.timestampUs, HH.decoderConfig);
      return await AH.finish(), VH(LH).buffer
    }

    function IH(HH, BH, LH) {
      var AH;
      const rH = null === (AH = HH.videoProgress) || void 0 === AH ? void 0 : AH.find((HH => HH.segmentId === BH));
      return void 0 !== rH && (null === LH || rH.partsLanded > LH.partsLanded) ? rH : LH
    }
    const fH = 6e5;
    async function lH(HH, BH) {
      const LH = {
        recordingId: BH.recordingId,
        outcome: "nothing",
        videoSegments: 0,
        telemetrySegments: 0,
        domSegments: 0
      };
      if (HH.nowMs() > HH.lateUploadUntilMs(BH) - fH) return {
        ...LH,
        outcome: "expired"
      };
      const AH = new Set;
      let rH;
      try {
        rH = await async function(HH, BH, LH, AH) {
          const {
            partJoiner: rH
          } = BH;
          if (void 0 === rH) return LH;
          const SH = HH.nowMs() > BH.manifest.endedAtMs + kH,
            hH = new Map;
          for (const {
              header: zH,
              sequence: CH,
              progress: EH
            }
            of LH.video)
            if (null !== CH && null === IH(BH, zH.segmentId, EH)) {
              let BH;
              try {
                BH = await HH.releaseJoined(rH, CH)
              } catch (tH) {
                if (!SH) {
                  AH.add(zH.segmentId);
                  continue
                }
                console.warn(`Session replay's part joiner didn't answer about video segment ${CH} in time; uploading it from the journal.`, tH), BH = null
              }
              null !== BH && hH.set(zH.segmentId, BH)
            } return {
            ...LH,
            joined: hH
          }
        }(HH, BH, await HH.store.read(BH), AH)
      } catch (MH) {
        return console.warn(`Session replay couldn't read what an earlier page load left of ${BH.recordingId}; trying again later.`, MH), {
          ...LH,
          outcome: "retryLater"
        }
      }
      const SH = [],
        hH = {
          ...BH.manifest,
          videoSegments: [],
          telemetrySegments: [],
          ...rH.dom.length + rH.domTails.length > 0 ? {
            domSegments: SH
          } : {}
        },
        tH = () => hH.videoSegments.length + hH.telemetrySegments.length + SH.length > 0,
        zH = function(HH, BH) {
          let LH = HH.video.reduce(((HH, BH) => {
            let {
              sequence: LH
            } = BH;
            return null === LH ? HH : Math.max(HH, LH + 1)
          }), BH.nextVideoSequence);
          return {
            segments: [...HH.video].sort(((HH, BH) => HH.header.segmentId - BH.header.segmentId)).map((AH => {
              var rH, SH, hH;
              let {
                header: tH,
                sequence: zH,
                progress: CH,
                chunks: EH
              } = AH;
              const XH = IH(BH, tH.segmentId, CH),
                GH = null === (rH = HH.joined) || void 0 === rH ? void 0 : rH.get(tH.segmentId),
                YH = null !== zH && void 0 !== GH ? {
                  sequence: zH,
                  ...GH.meta
                } : null !== zH && null !== XH ? {
                  sequence: zH,
                  ...XH.meta,
                  startMs: Math.round(XH.meta.startMs),
                  endMs: Math.round(XH.meta.endMs),
                  parts: XH.partsLanded
                } : null,
                uH = null !== (SH = null !== (hH = null === GH || void 0 === GH ? void 0 : GH.completeUntilUs) && void 0 !== hH ? hH : null === XH || void 0 === XH ? void 0 : XH.completeUntilUs) && void 0 !== SH ? SH : null,
                QH = function(HH) {
                  const BH = [...HH].sort(((HH, BH) => HH.index - BH.index)),
                    LH = [];
                  for (const AH of BH) {
                    if (0 === LH.length ? !AH.key : AH.index !== LH[0].index + LH.length) break;
                    LH.push(AH)
                  }
                  return LH
                }(null === uH ? EH : EH.filter((HH => HH.timestampUs >= uH))),
                WH = 0 === QH.length ? null : {
                  sequence: LH++,
                  header: {
                    ...tH,
                    firstTimestampUs: QH[0].timestampUs
                  },
                  chunks: QH
                };
              return {
                segmentId: tH.segmentId,
                landed: YH,
                tail: WH
              }
            })),
            nextSequence: LH
          }
        }(rH, BH),
        CH = function(HH, BH) {
          var LH;
          let AH = HH.dom.reduce(((HH, BH) => {
            let {
              sequence: LH
            } = BH;
            return Math.max(HH, LH + 1)
          }), null !== (LH = BH.nextDomSequence) && void 0 !== LH ? LH : 0);
          const rH = [...HH.domTails].sort(((HH, BH) => HH.chunkIndex - BH.chunkIndex || HH.fromChar - BH.fromChar)),
            SH = [];
          for (const hH of rH) {
            const HH = SH[SH.length - 1],
              BH = (null === HH || void 0 === HH ? void 0 : HH.chunkIndex) === hH.chunkIndex;
            hH.fromChar === (BH ? HH.text.length : 0) && (BH ? (HH.text += hH.text, HH.last = hH) : SH.push({
              chunkIndex: hH.chunkIndex,
              sequence: AH++,
              text: hH.text,
              last: hH
            }))
          }
          return {
            tails: SH,
            nextSequence: AH
          }
        }(rH, BH),
        EH = {
          videoSegmentIds: [],
          telemetrySequences: [],
          domSequences: [],
          domTailChunks: []
        };
      let XH = !1;
      const GH = async rH => {
        if (tH()) {
          const tH = await WH(HH, BH, hH);
          if ("retryLater" === rH && "uploaded" === tH) try {
            var SH;
            const LH = CH.tails.find((HH => {
                let {
                  chunkIndex: BH
                } = HH;
                return !EH.domTailChunks.includes(BH)
              })),
              AH = null !== (SH = null === LH || void 0 === LH ? void 0 : LH.sequence) && void 0 !== SH ? SH : CH.nextSequence;
            await HH.store.forgetSent({
              ...BH,
              nextVideoSequence: zH.nextSequence,
              nextDomSequence: AH
            }, EH)
          } catch (MH) {
            console.warn(`Session replay couldn't drop what it sent of ${BH.recordingId} from its journal.`, MH)
          }
          if ("refused" === tH && AH.size > 0) return {
            ...LH,
            outcome: "refused"
          }
        }
        return {
          ...LH,
          outcome: rH
        }
      };
      for (const {
          segmentId: WH,
          landed: xH,
          tail: vH
        }
        of zH.segments)
        if (!AH.has(WH)) {
          if (null !== xH && hH.videoSegments.push(xH), null !== vH) {
            const AH = await QH(HH, BH, {
              kind: "video",
              sequence: vH.sequence,
              contentType: "video/mp4",
              bytes: () => HH.mux(vH.header, vH.chunks)
            });
            if ("retryLater" === AH) return await GH(AH);
            "refused" === AH ? XH = !0 : (hH.videoSegments.push({
              sequence: vH.sequence,
              ...mH(vH.header, vH.chunks)
            }), LH.videoSegments++)
          }
          EH.videoSegmentIds.push(WH)
        } const YH = [...rH.telemetry].sort(((HH, BH) => HH.sequence - BH.sequence));
      for (const WH of YH) {
        const AH = WH.landed ? "uploaded" : await QH(HH, BH, {
          kind: "telemetry",
          sequence: WH.sequence,
          contentType: "application/octet-stream",
          bytes: async () => WH.bytes
        });
        if ("retryLater" === AH) return await GH(AH);
        EH.telemetrySequences.push(WH.sequence), "refused" !== AH ? (hH.telemetrySegments.push({
          sequence: WH.sequence,
          startMs: Math.round(WH.startMs),
          endMs: Math.round(WH.endMs)
        }), LH.telemetrySegments++) : XH = !0
      }
      const uH = [...rH.dom].sort(((HH, BH) => HH.sequence - BH.sequence));
      for (const {
          sequence: WH,
          chunk: xH,
          bytes: vH
        }
        of uH) {
        const AH = null === vH ? "uploaded" : await QH(HH, BH, {
          kind: "dom",
          sequence: WH,
          contentType: "application/octet-stream",
          bytes: async () => vH
        });
        if ("retryLater" === AH) return await GH(AH);
        EH.domSequences.push(WH), SH.push({
          sequence: WH,
          ...xH
        }), "uploaded" === AH && LH.domSegments++
      }
      for (const {
          chunkIndex: WH,
          sequence: xH,
          text: vH,
          last: PH
        }
        of CH.tails) {
        let AH;
        const rH = await QH(HH, BH, {
          kind: "dom",
          sequence: xH,
          contentType: "application/octet-stream",
          bytes: async () => (AH = await HH.packDom(vH), AH.bytes.buffer)
        });
        if ("retryLater" === rH) return await GH(rH);
        if (EH.domTailChunks.push(WH), "refused" === rH) {
          XH = !0;
          continue
        }
        const {
          bytes: hH,
          inflatedBytes: tH
        } = AH, {
          startMs: zH,
          endMs: CH,
          summary: YH
        } = PH;
        SH.push({
          sequence: xH,
          startMs: zH,
          endMs: CH,
          byteLength: hH.byteLength,
          summary: {
            ...YH,
            size: tH
          }
        }), LH.domSegments++
      }
      return AH.size > 0 ? await GH("retryLater") : tH() ? {
        ...LH,
        outcome: await WH(HH, BH, hH)
      } : XH ? {
        ...LH,
        outcome: "refused"
      } : LH
    }
    var KH = LH(40745),
      cH = LH(40769);
    async function eH() {
      const HH = "undefined" === typeof navigator ? void 0 : navigator.locks;
      if (!GH.d.supported || void 0 === HH) return;
      const BH = new GH.d,
        LH = new KH.b,
        zH = new SH.c,
        CH = await async function(HH) {
          const BH = [];
          for (const AH of await HH.store.listRecordings()) {
            let rH = {
              recordingId: AH.recordingId,
              outcome: "live",
              videoSegments: 0,
              telemetrySegments: 0,
              domSegments: 0
            };
            try {
              await HH.withLock(AH.recordingId, (async () => {
                const BH = (await HH.store.listRecordings()).find((HH => {
                  let {
                    recordingId: BH
                  } = HH;
                  return BH === AH.recordingId
                }));
                if (void 0 !== BH) {
                  try {
                    rH = await lH(HH, BH)
                  } catch (LH) {
                    console.warn(`Session replay couldn't recover what an earlier page load left of ${AH.recordingId}; forgetting it.`, LH), rH = {
                      ...rH,
                      outcome: "failed"
                    }
                  }
                  "retryLater" !== rH.outcome && await HH.store.deleteRecording(AH.recordingId)
                } else rH = {
                  ...rH,
                  outcome: "nothing"
                }
              }))
            } catch (LH) {
              console.warn(`Session replay couldn't forget ${AH.recordingId}'s journal.`, LH)
            }
            BH.push(rH)
          }
          return BH
        }({
          store: BH,
          transportFor: HH => {
            var BH;
            return new cH.e((null !== (BH = HH.endpoints) && void 0 !== BH ? BH : (0, tH.c)()).segmentUploadUrl, {
              relay: LH.for(HH)
            })
          },
          postManifest: (HH, BH) => {
            var LH;
            return (0, XH.e)((null !== (LH = HH.endpoints) && void 0 !== LH ? LH : (0, tH.c)()).manifestUrl, BH)
          },
          withLock: async (BH, LH) => {
            await HH.request((0, YH.u)(BH), {
              ifAvailable: !0
            }, (async HH => {
              null !== HH && await LH()
            }))
          },
          mux: oH,
          packDom: HH => zH.pack(HH).catch((() => (0, hH.c)(HH))),
          releaseJoined: EH,
          nowMs: Date.now,
          lateUploadUntilMs: HH => {
            var BH;
            return null !== (BH = HH.lateUploadUntilMs) && void 0 !== BH ? BH : HH.expiresAtMs + AH.b
          },
          mayStartUpload: () => !0
        }).finally((() => {
          zH.close()
        }));
      for (const AH of CH) "live" !== AH.outcome && console.info(`Session replay: ${AH.outcome} what an earlier page load left of ${AH.recordingId} (${AH.videoSegments} video, ${AH.telemetrySegments} telemetry, ${AH.domSegments} page recording).`);
      0 === (await BH.listRecordings()).length && rH.e.removeItem(YH.m)
    }
  },
  40891: () => {}
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);