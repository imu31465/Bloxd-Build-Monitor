export const id = 64;
export const ids = [64];
export const modules = {
  40673: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      recoverReplayTails: () => uU
    });
    var cU = zU(40576),
      yU = zU(42),
      QU = zU(40569),
      AU = zU(40543),
      FU = zU(40573),
      oU = zU(1220);
    const DU = 35e3;
    async function EU(UU, XU, zU) {
      const cU = {
          token: UU.token,
          sequence: XU
        },
        yU = (0, oU.n)(DU),
        QU = void 0 === zU ? yU : (0, oU.i)([zU, yU]);
      let AU = !1;
      try {
        const XU = await fetch(UU.releaseUrl, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain"
          },
          body: JSON.stringify(cU),
          signal: QU
        });
        if (503 === XU.status) {
          const {
            reason: UU
          } = await XU.json();
          AU = "release_retrying" === UU || "shutting_down" === UU
        }
        if (!XU.ok) throw new Error(`HTTP ${XU.status}`);
        const zU = await XU.json();
        return "stored" === zU.outcome ? zU.stored : null
      } catch (FU) {
        if (QU.aborted || AU) throw FU;
        return console.warn(`Session replay couldn't ask the part joiner about video segment ${XU}; uploading it from the journal.`, FU), null
      }
    }
    var YU = zU(40607),
      NU = zU(40644),
      IU = zU(5139),
      pU = zU(40613);
    async function aU(UU, XU, zU) {
      if (!UU.mayStartUpload()) return "retryLater";
      const {
        kind: cU,
        sequence: yU,
        contentType: QU
      } = zU;
      let AU;
      try {
        AU = await zU.bytes()
      } catch (FU) {
        return console.warn(`Session replay couldn't mux late ${cU} segment ${yU}; skipping it.`, FU), "refused"
      }
      try {
        const zU = UU.transportFor(XU),
          FU = await zU.requestPutUrl({
            uploadToken: XU.uploadToken,
            kind: cU,
            sequence: yU,
            contentType: QU,
            byteLength: AU.byteLength,
            late: !0
          });
        return "rejected" in FU ? (console.warn(`Session replay late ${cU} segment ${yU} refused: ${FU.reason}`), FU.retryable ? "retryLater" : "refused") : (await zU.put(FU.uploadUrl, AU, QU, FU.ifNoneMatch), "uploaded")
      } catch (FU) {
        return console.warn(`Session replay late ${cU} segment ${yU} upload failed; trying again later.`, FU), "retryLater"
      }
    }
    async function tU(UU, XU, zU) {
      var cU;
      const yU = UU.nowMs(),
        QU = (null !== (cU = zU.domSegments) && void 0 !== cU ? cU : []).filter((UU => UU.endMs <= yU));
      for (const AU of [...zU.videoSegments, ...zU.telemetrySegments, ...QU]) zU.endedAtMs = Math.max(zU.endedAtMs, AU.endMs);
      for (const AU of (0, pU.e)({
          uploadToken: XU.uploadToken,
          manifest: zU,
          creatorGrants: [],
          late: !0
        })) {
        const zU = await UU.postManifest(XU, AU);
        if ("uploaded" !== zU) return zU
      }
      return "uploaded"
    }
    var gU = zU(40679),
      kU = zU(40698),
      GU = zU(40747),
      BU = zU(40771),
      ZU = zU(40754);
    class RU {
      constructor(UU, XU, zU, cU, yU) {
        this.frameDurationS = zU, this.onFragment = yU, this.firstTimestampUs = void 0, this.lastTimestampUs = void 0, this.output = void 0, this.source = void 0, this.pending = void 0, this.chunkCount = 0, this.boxes = [], this.addingTimestampUs = null, this.firstTimestampUs = XU, this.lastTimestampUs = XU;
        const QU = UU => {
          this.boxes.push(UU)
        };
        this.output = new gU.e({
          format: new kU.g({
            fastStart: "fragmented",
            minimumFragmentDuration: cU,
            onFtyp: QU,
            onMoov: QU,
            onMoof: QU,
            onMdat: UU => {
              QU(UU), this.fragmentDone()
            }
          }),
          target: new GU.d
        }), this.source = new BU.g(UU), this.output.addVideoTrack(this.source), this.pending = this.output.start()
      }
      get durationUs() {
        return this.lastTimestampUs - this.firstTimestampUs
      }
      add(UU, XU) {
        const zU = new Uint8Array(UU.byteLength);
        UU.copyTo(zU), this.addData(zU, UU.type, UU.timestamp, XU)
      }
      addData(UU, XU, zU, cU) {
        const yU = new ZU.e(UU, XU, (zU - this.firstTimestampUs) / 1e6, this.frameDurationS),
          QU = 0 === this.chunkCount++;
        this.lastTimestampUs = Math.max(this.lastTimestampUs, zU), this.pending = this.pending.then((() => (this.addingTimestampUs = zU, this.source.add(yU, QU ? {
          decoderConfig: cU
        } : void 0))))
      }
      async finish() {
        await this.pending, this.addingTimestampUs = null, await this.output.finalize()
      }
      fragmentDone() {
        var UU;
        const XU = PU(this.boxes);
        this.boxes = [], this.onFragment({
          bytes: XU,
          endUs: null !== (UU = this.addingTimestampUs) && void 0 !== UU ? UU : this.lastTimestampUs + 1e6 * this.frameDurationS
        })
      }
    }

    function PU(UU) {
      const XU = new Uint8Array(UU.reduce(((UU, XU) => UU + XU.byteLength), 0));
      let zU = 0;
      for (const cU of UU) XU.set(cU, zU), zU += cU.byteLength;
      return XU
    }
    zU(40603);

    function WU(UU, XU, zU, cU) {
      const yU = UU / 1e3 + zU;
      return {
        startMs: yU,
        endMs: yU + XU / 1e3 + 1e3 / cU
      }
    }
    const dU = 2,
      LU = 18e5;

    function eU(UU, XU) {
      const zU = XU[XU.length - 1].timestampUs - UU.firstTimestampUs,
        {
          startMs: cU,
          endMs: yU
        } = WU(UU.firstTimestampUs, zU, UU.epochOffsetMs, UU.fps);
      return {
        startMs: Math.round(cU),
        endMs: Math.round(yU),
        width: UU.width,
        height: UU.height,
        codec: UU.codec
      }
    }
    async function CU(UU, XU) {
      const zU = [],
        cU = new RU(UU.containerCodec, UU.firstTimestampUs, 1 / UU.fps, dU, (UU => {
          let {
            bytes: XU
          } = UU;
          zU.push(XU)
        }));
      for (const yU of XU) cU.addData(yU.data, yU.key ? "key" : "delta", yU.timestampUs, UU.decoderConfig);
      return await cU.finish(), PU(zU).buffer
    }

    function wU(UU, XU, zU) {
      var cU;
      const yU = null === (cU = UU.videoProgress) || void 0 === cU ? void 0 : cU.find((UU => UU.segmentId === XU));
      return void 0 !== yU && (null === zU || yU.partsLanded > zU.partsLanded) ? yU : zU
    }
    const qU = 6e5;
    async function OU(UU, XU) {
      const zU = {
        recordingId: XU.recordingId,
        outcome: "nothing",
        videoSegments: 0,
        telemetrySegments: 0,
        domSegments: 0
      };
      if (UU.nowMs() > UU.lateUploadUntilMs(XU) - qU) return {
        ...zU,
        outcome: "expired"
      };
      const cU = new Set;
      let yU;
      try {
        yU = await async function(UU, XU, zU, cU) {
          const {
            partJoiner: yU
          } = XU;
          if (void 0 === yU) return zU;
          const QU = UU.nowMs() > XU.manifest.endedAtMs + LU,
            AU = new Map;
          for (const {
              header: oU,
              sequence: DU,
              progress: EU
            }
            of zU.video)
            if (null !== DU && null === wU(XU, oU.segmentId, EU)) {
              let XU;
              try {
                XU = await UU.releaseJoined(yU, DU)
              } catch (FU) {
                if (!QU) {
                  cU.add(oU.segmentId);
                  continue
                }
                console.warn(`Session replay's part joiner didn't answer about video segment ${DU} in time; uploading it from the journal.`, FU), XU = null
              }
              null !== XU && AU.set(oU.segmentId, XU)
            } return {
            ...zU,
            joined: AU
          }
        }(UU, XU, await UU.store.read(XU), cU)
      } catch (gU) {
        return console.warn(`Session replay couldn't read what an earlier page load left of ${XU.recordingId}; trying again later.`, gU), {
          ...zU,
          outcome: "retryLater"
        }
      }
      const QU = [],
        AU = {
          ...XU.manifest,
          videoSegments: [],
          telemetrySegments: [],
          ...yU.dom.length + yU.domTails.length > 0 ? {
            domSegments: QU
          } : {}
        },
        FU = () => AU.videoSegments.length + AU.telemetrySegments.length + QU.length > 0,
        oU = function(UU, XU) {
          let zU = UU.video.reduce(((UU, XU) => {
            let {
              sequence: zU
            } = XU;
            return null === zU ? UU : Math.max(UU, zU + 1)
          }), XU.nextVideoSequence);
          return {
            segments: [...UU.video].sort(((UU, XU) => UU.header.segmentId - XU.header.segmentId)).map((cU => {
              var yU, QU, AU;
              let {
                header: FU,
                sequence: oU,
                progress: DU,
                chunks: EU
              } = cU;
              const YU = wU(XU, FU.segmentId, DU),
                NU = null === (yU = UU.joined) || void 0 === yU ? void 0 : yU.get(FU.segmentId),
                IU = null !== oU && void 0 !== NU ? {
                  sequence: oU,
                  ...NU.meta
                } : null !== oU && null !== YU ? {
                  sequence: oU,
                  ...YU.meta,
                  startMs: Math.round(YU.meta.startMs),
                  endMs: Math.round(YU.meta.endMs),
                  parts: YU.partsLanded
                } : null,
                pU = null !== (QU = null !== (AU = null === NU || void 0 === NU ? void 0 : NU.completeUntilUs) && void 0 !== AU ? AU : null === YU || void 0 === YU ? void 0 : YU.completeUntilUs) && void 0 !== QU ? QU : null,
                aU = function(UU) {
                  const XU = [...UU].sort(((UU, XU) => UU.index - XU.index)),
                    zU = [];
                  for (const cU of XU) {
                    if (0 === zU.length ? !cU.key : cU.index !== zU[0].index + zU.length) break;
                    zU.push(cU)
                  }
                  return zU
                }(null === pU ? EU : EU.filter((UU => UU.timestampUs >= pU))),
                tU = 0 === aU.length ? null : {
                  sequence: zU++,
                  header: {
                    ...FU,
                    firstTimestampUs: aU[0].timestampUs
                  },
                  chunks: aU
                };
              return {
                segmentId: FU.segmentId,
                landed: IU,
                tail: tU
              }
            })),
            nextSequence: zU
          }
        }(yU, XU),
        DU = function(UU, XU) {
          var zU;
          let cU = UU.dom.reduce(((UU, XU) => {
            let {
              sequence: zU
            } = XU;
            return Math.max(UU, zU + 1)
          }), null !== (zU = XU.nextDomSequence) && void 0 !== zU ? zU : 0);
          const yU = [...UU.domTails].sort(((UU, XU) => UU.chunkIndex - XU.chunkIndex || UU.fromChar - XU.fromChar)),
            QU = [];
          for (const AU of yU) {
            const UU = QU[QU.length - 1],
              XU = (null === UU || void 0 === UU ? void 0 : UU.chunkIndex) === AU.chunkIndex;
            AU.fromChar === (XU ? UU.text.length : 0) && (XU ? (UU.text += AU.text, UU.last = AU) : QU.push({
              chunkIndex: AU.chunkIndex,
              sequence: cU++,
              text: AU.text,
              last: AU
            }))
          }
          return {
            tails: QU,
            nextSequence: cU
          }
        }(yU, XU),
        EU = {
          videoSegmentIds: [],
          telemetrySequences: [],
          domSequences: [],
          domTailChunks: []
        };
      let YU = !1;
      const NU = async yU => {
        if (FU()) {
          const FU = await tU(UU, XU, AU);
          if ("retryLater" === yU && "uploaded" === FU) try {
            var QU;
            const zU = DU.tails.find((UU => {
                let {
                  chunkIndex: XU
                } = UU;
                return !EU.domTailChunks.includes(XU)
              })),
              cU = null !== (QU = null === zU || void 0 === zU ? void 0 : zU.sequence) && void 0 !== QU ? QU : DU.nextSequence;
            await UU.store.forgetSent({
              ...XU,
              nextVideoSequence: oU.nextSequence,
              nextDomSequence: cU
            }, EU)
          } catch (gU) {
            console.warn(`Session replay couldn't drop what it sent of ${XU.recordingId} from its journal.`, gU)
          }
          if ("refused" === FU && cU.size > 0) return {
            ...zU,
            outcome: "refused"
          }
        }
        return {
          ...zU,
          outcome: yU
        }
      };
      for (const {
          segmentId: tU,
          landed: kU,
          tail: GU
        }
        of oU.segments)
        if (!cU.has(tU)) {
          if (null !== kU && AU.videoSegments.push(kU), null !== GU) {
            const cU = await aU(UU, XU, {
              kind: "video",
              sequence: GU.sequence,
              contentType: "video/mp4",
              bytes: () => UU.mux(GU.header, GU.chunks)
            });
            if ("retryLater" === cU) return await NU(cU);
            "refused" === cU ? YU = !0 : (AU.videoSegments.push({
              sequence: GU.sequence,
              ...eU(GU.header, GU.chunks)
            }), zU.videoSegments++)
          }
          EU.videoSegmentIds.push(tU)
        } const IU = [...yU.telemetry].sort(((UU, XU) => UU.sequence - XU.sequence));
      for (const tU of IU) {
        const cU = tU.landed ? "uploaded" : await aU(UU, XU, {
          kind: "telemetry",
          sequence: tU.sequence,
          contentType: "application/octet-stream",
          bytes: async () => tU.bytes
        });
        if ("retryLater" === cU) return await NU(cU);
        EU.telemetrySequences.push(tU.sequence), "refused" !== cU ? (AU.telemetrySegments.push({
          sequence: tU.sequence,
          startMs: Math.round(tU.startMs),
          endMs: Math.round(tU.endMs)
        }), zU.telemetrySegments++) : YU = !0
      }
      const pU = [...yU.dom].sort(((UU, XU) => UU.sequence - XU.sequence));
      for (const {
          sequence: tU,
          chunk: kU,
          bytes: GU
        }
        of pU) {
        const cU = null === GU ? "uploaded" : await aU(UU, XU, {
          kind: "dom",
          sequence: tU,
          contentType: "application/octet-stream",
          bytes: async () => GU
        });
        if ("retryLater" === cU) return await NU(cU);
        EU.domSequences.push(tU), QU.push({
          sequence: tU,
          ...kU
        }), "uploaded" === cU && zU.domSegments++
      }
      for (const {
          chunkIndex: tU,
          sequence: kU,
          text: GU,
          last: BU
        }
        of DU.tails) {
        let cU;
        const yU = await aU(UU, XU, {
          kind: "dom",
          sequence: kU,
          contentType: "application/octet-stream",
          bytes: async () => (cU = await UU.packDom(GU), cU.bytes.buffer)
        });
        if ("retryLater" === yU) return await NU(yU);
        if (EU.domTailChunks.push(tU), "refused" === yU) {
          YU = !0;
          continue
        }
        const {
          bytes: AU,
          inflatedBytes: FU
        } = cU, {
          startMs: oU,
          endMs: DU,
          summary: IU
        } = BU;
        QU.push({
          sequence: kU,
          startMs: oU,
          endMs: DU,
          byteLength: AU.byteLength,
          summary: {
            ...IU,
            size: FU
          }
        }), zU.domSegments++
      }
      return cU.size > 0 ? await NU("retryLater") : FU() ? {
        ...zU,
        outcome: await tU(UU, XU, AU)
      } : YU ? {
        ...zU,
        outcome: "refused"
      } : zU
    }
    var SU = zU(40586),
      rU = zU(40622);
    async function uU() {
      const UU = "undefined" === typeof navigator ? void 0 : navigator.locks;
      if (!NU.b.supported || void 0 === UU) return;
      const XU = new NU.b,
        zU = new SU.b,
        oU = new QU.d,
        DU = await async function(UU) {
          const XU = [];
          for (const cU of await UU.store.listRecordings()) {
            let yU = {
              recordingId: cU.recordingId,
              outcome: "live",
              videoSegments: 0,
              telemetrySegments: 0,
              domSegments: 0
            };
            try {
              await UU.withLock(cU.recordingId, (async () => {
                const XU = (await UU.store.listRecordings()).find((UU => {
                  let {
                    recordingId: XU
                  } = UU;
                  return XU === cU.recordingId
                }));
                if (void 0 !== XU) {
                  try {
                    yU = await OU(UU, XU)
                  } catch (zU) {
                    console.warn(`Session replay couldn't recover what an earlier page load left of ${cU.recordingId}; forgetting it.`, zU), yU = {
                      ...yU,
                      outcome: "failed"
                    }
                  }
                  "retryLater" !== yU.outcome && await UU.store.deleteRecording(cU.recordingId)
                } else yU = {
                  ...yU,
                  outcome: "nothing"
                }
              }))
            } catch (zU) {
              console.warn(`Session replay couldn't forget ${cU.recordingId}'s journal.`, zU)
            }
            XU.push(yU)
          }
          return XU
        }({
          store: XU,
          transportFor: UU => {
            var XU;
            return new rU.g((null !== (XU = UU.endpoints) && void 0 !== XU ? XU : (0, FU.d)()).segmentUploadUrl, {
              relay: zU.for(UU)
            })
          },
          postManifest: (UU, XU) => {
            var zU;
            return (0, YU.b)((null !== (zU = UU.endpoints) && void 0 !== zU ? zU : (0, FU.d)()).manifestUrl, XU)
          },
          withLock: async (XU, zU) => {
            await UU.request((0, IU.v)(XU), {
              ifAvailable: !0
            }, (async UU => {
              null !== UU && await zU()
            }))
          },
          mux: CU,
          packDom: UU => oU.pack(UU).catch((() => (0, AU.b)(UU))),
          releaseJoined: EU,
          nowMs: Date.now,
          lateUploadUntilMs: UU => {
            var XU;
            return null !== (XU = UU.lateUploadUntilMs) && void 0 !== XU ? XU : UU.expiresAtMs + cU.e
          },
          mayStartUpload: () => !0
        }).finally((() => {
          oU.close()
        }));
      for (const cU of DU) "live" !== cU.outcome && console.info(`Session replay: ${cU.outcome} what an earlier page load left of ${cU.recordingId} (${cU.videoSegments} video, ${cU.telemetrySegments} telemetry, ${cU.domSegments} page recording).`);
      0 === (await XU.listRecordings()).length && yU.k.removeItem(IU.k)
    }
  },
  40752: () => {}
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);