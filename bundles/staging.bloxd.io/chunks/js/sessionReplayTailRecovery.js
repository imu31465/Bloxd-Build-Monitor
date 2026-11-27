export const id = 65;
export const ids = [65];
export const modules = {
  41102: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      recoverReplayTails: () => HR
    });
    var yR = GR(41034),
      tR = GR(46),
      uR = GR(41028),
      ZR = GR(41001),
      qR = GR(41031),
      iR = GR(1295);
    const fR = 35e3;
    async function VR(RR, JR, GR) {
      const yR = {
          token: RR.token,
          sequence: JR
        },
        tR = (0, iR.t)(fR),
        uR = void 0 === GR ? tR : (0, iR.l)([GR, tR]);
      let ZR = !1;
      try {
        const JR = await fetch(RR.releaseUrl, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain"
          },
          body: JSON.stringify(yR),
          signal: uR
        });
        if (503 === JR.status) {
          const {
            reason: RR
          } = await JR.json();
          ZR = "release_retrying" === RR || "shutting_down" === RR
        }
        if (!JR.ok) throw new Error(`HTTP ${JR.status}`);
        const GR = await JR.json();
        return "stored" === GR.outcome ? GR.stored : null
      } catch (qR) {
        if (uR.aborted || ZR) throw qR;
        return console.warn(`Session replay couldn't ask the part joiner about video segment ${JR}; uploading it from the journal.`, qR), null
      }
    }
    var KR = GR(41051),
      wR = GR(41072),
      rR = GR(5506),
      eR = GR(41053);
    async function aR(RR, JR, GR) {
      if (!RR.mayStartUpload()) return "retryLater";
      const {
        kind: yR,
        sequence: tR,
        contentType: uR
      } = GR;
      let ZR;
      try {
        ZR = await GR.bytes()
      } catch (qR) {
        return console.warn(`Session replay couldn't mux late ${yR} segment ${tR}; skipping it.`, qR), "refused"
      }
      try {
        const GR = RR.transportFor(JR),
          qR = await GR.requestPutUrl({
            uploadToken: JR.uploadToken,
            kind: yR,
            sequence: tR,
            contentType: uR,
            byteLength: ZR.byteLength,
            late: !0
          });
        return "rejected" in qR ? (console.warn(`Session replay late ${yR} segment ${tR} refused: ${qR.reason}`), qR.retryable ? "retryLater" : "refused") : (await GR.put(qR.uploadUrl, ZR, uR, qR.ifNoneMatch), "uploaded")
      } catch (qR) {
        return console.warn(`Session replay late ${yR} segment ${tR} upload failed; trying again later.`, qR), "retryLater"
      }
    }
    async function LR(RR, JR, GR) {
      var yR;
      const tR = RR.nowMs(),
        uR = (null !== (yR = GR.domSegments) && void 0 !== yR ? yR : []).filter((RR => RR.endMs <= tR));
      for (const ZR of [...GR.videoSegments, ...GR.telemetrySegments, ...uR]) GR.endedAtMs = Math.max(GR.endedAtMs, ZR.endMs);
      for (const ZR of (0, eR.e)({
          uploadToken: JR.uploadToken,
          manifest: GR,
          creatorGrants: [],
          late: !0
        })) {
        const GR = await RR.postManifest(JR, ZR);
        if ("uploaded" !== GR) return GR
      }
      return "uploaded"
    }
    var nR = GR(41108),
      UR = GR(41123),
      WR = GR(41170),
      AR = GR(41192),
      CR = GR(41179);
    class XR {
      constructor(RR, JR, GR, yR, tR) {
        this.frameDurationS = GR, this.onFragment = tR, this.firstTimestampUs = void 0, this.lastTimestampUs = void 0, this.output = void 0, this.source = void 0, this.pending = void 0, this.chunkCount = 0, this.boxes = [], this.addingTimestampUs = null, this.firstTimestampUs = JR, this.lastTimestampUs = JR;
        const uR = RR => {
          this.boxes.push(RR)
        };
        this.output = new nR.b({
          format: new UR.l({
            fastStart: "fragmented",
            minimumFragmentDuration: yR,
            onFtyp: uR,
            onMoov: uR,
            onMoof: uR,
            onMdat: RR => {
              uR(RR), this.fragmentDone()
            }
          }),
          target: new WR.f
        }), this.source = new AR.f(RR), this.output.addVideoTrack(this.source), this.pending = this.output.start()
      }
      get durationUs() {
        return this.lastTimestampUs - this.firstTimestampUs
      }
      add(RR, JR) {
        const GR = new Uint8Array(RR.byteLength);
        RR.copyTo(GR), this.addData(GR, RR.type, RR.timestamp, JR)
      }
      addData(RR, JR, GR, yR) {
        const tR = new CR.c(RR, JR, (GR - this.firstTimestampUs) / 1e6, this.frameDurationS),
          uR = 0 === this.chunkCount++;
        this.lastTimestampUs = Math.max(this.lastTimestampUs, GR), this.pending = this.pending.then((() => (this.addingTimestampUs = GR, this.source.add(tR, uR ? {
          decoderConfig: yR
        } : void 0))))
      }
      async finish() {
        await this.pending, this.addingTimestampUs = null, await this.output.finalize()
      }
      fragmentDone() {
        var RR;
        const JR = MR(this.boxes);
        this.boxes = [], this.onFragment({
          bytes: JR,
          endUs: null !== (RR = this.addingTimestampUs) && void 0 !== RR ? RR : this.lastTimestampUs + 1e6 * this.frameDurationS
        })
      }
    }

    function MR(RR) {
      const JR = new Uint8Array(RR.reduce(((RR, JR) => RR + JR.byteLength), 0));
      let GR = 0;
      for (const yR of RR) JR.set(yR, GR), GR += yR.byteLength;
      return JR
    }
    GR(41049);

    function BR(RR, JR, GR, yR) {
      const tR = RR / 1e3 + GR;
      return {
        startMs: tR,
        endMs: tR + JR / 1e3 + 1e3 / yR
      }
    }
    const lR = 2,
      pR = 18e5;

    function gR(RR, JR) {
      const GR = JR[JR.length - 1].timestampUs - RR.firstTimestampUs,
        {
          startMs: yR,
          endMs: tR
        } = BR(RR.firstTimestampUs, GR, RR.epochOffsetMs, RR.fps);
      return {
        startMs: Math.round(yR),
        endMs: Math.round(tR),
        width: RR.width,
        height: RR.height,
        codec: RR.codec
      }
    }
    async function bR(RR, JR) {
      const GR = [],
        yR = new XR(RR.containerCodec, RR.firstTimestampUs, 1 / RR.fps, lR, (RR => {
          let {
            bytes: JR
          } = RR;
          GR.push(JR)
        }));
      for (const tR of JR) yR.addData(tR.data, tR.key ? "key" : "delta", tR.timestampUs, RR.decoderConfig);
      return await yR.finish(), MR(GR).buffer
    }

    function vR(RR, JR, GR) {
      var yR;
      const tR = null === (yR = RR.videoProgress) || void 0 === yR ? void 0 : yR.find((RR => RR.segmentId === JR));
      return void 0 !== tR && (null === GR || tR.partsLanded > GR.partsLanded) ? tR : GR
    }
    const OR = 6e5;
    async function xR(RR, JR) {
      const GR = {
        recordingId: JR.recordingId,
        outcome: "nothing",
        videoSegments: 0,
        telemetrySegments: 0,
        domSegments: 0
      };
      if (RR.nowMs() > RR.lateUploadUntilMs(JR) - OR) return {
        ...GR,
        outcome: "expired"
      };
      const yR = new Set;
      let tR;
      try {
        tR = await async function(RR, JR, GR, yR) {
          const {
            partJoiner: tR
          } = JR;
          if (void 0 === tR) return GR;
          const uR = RR.nowMs() > JR.manifest.endedAtMs + pR,
            ZR = new Map;
          for (const {
              header: iR,
              sequence: fR,
              progress: VR
            }
            of GR.video)
            if (null !== fR && null === vR(JR, iR.segmentId, VR)) {
              let JR;
              try {
                JR = await RR.releaseJoined(tR, fR)
              } catch (qR) {
                if (!uR) {
                  yR.add(iR.segmentId);
                  continue
                }
                console.warn(`Session replay's part joiner didn't answer about video segment ${fR} in time; uploading it from the journal.`, qR), JR = null
              }
              null !== JR && ZR.set(iR.segmentId, JR)
            } return {
            ...GR,
            joined: ZR
          }
        }(RR, JR, await RR.store.read(JR), yR)
      } catch (nR) {
        return console.warn(`Session replay couldn't read what an earlier page load left of ${JR.recordingId}; trying again later.`, nR), {
          ...GR,
          outcome: "retryLater"
        }
      }
      const uR = [],
        ZR = {
          ...JR.manifest,
          videoSegments: [],
          telemetrySegments: [],
          ...tR.dom.length + tR.domTails.length > 0 ? {
            domSegments: uR
          } : {}
        },
        qR = () => ZR.videoSegments.length + ZR.telemetrySegments.length + uR.length > 0,
        iR = function(RR, JR) {
          let GR = RR.video.reduce(((RR, JR) => {
            let {
              sequence: GR
            } = JR;
            return null === GR ? RR : Math.max(RR, GR + 1)
          }), JR.nextVideoSequence);
          return {
            segments: [...RR.video].sort(((RR, JR) => RR.header.segmentId - JR.header.segmentId)).map((yR => {
              var tR, uR, ZR;
              let {
                header: qR,
                sequence: iR,
                progress: fR,
                chunks: VR
              } = yR;
              const KR = vR(JR, qR.segmentId, fR),
                wR = null === (tR = RR.joined) || void 0 === tR ? void 0 : tR.get(qR.segmentId),
                rR = null !== iR && void 0 !== wR ? {
                  sequence: iR,
                  ...wR.meta
                } : null !== iR && null !== KR ? {
                  sequence: iR,
                  ...KR.meta,
                  startMs: Math.round(KR.meta.startMs),
                  endMs: Math.round(KR.meta.endMs),
                  parts: KR.partsLanded
                } : null,
                eR = null !== (uR = null !== (ZR = null === wR || void 0 === wR ? void 0 : wR.completeUntilUs) && void 0 !== ZR ? ZR : null === KR || void 0 === KR ? void 0 : KR.completeUntilUs) && void 0 !== uR ? uR : null,
                aR = function(RR) {
                  const JR = [...RR].sort(((RR, JR) => RR.index - JR.index)),
                    GR = [];
                  for (const yR of JR) {
                    if (0 === GR.length ? !yR.key : yR.index !== GR[0].index + GR.length) break;
                    GR.push(yR)
                  }
                  return GR
                }(null === eR ? VR : VR.filter((RR => RR.timestampUs >= eR))),
                LR = 0 === aR.length ? null : {
                  sequence: GR++,
                  header: {
                    ...qR,
                    firstTimestampUs: aR[0].timestampUs
                  },
                  chunks: aR
                };
              return {
                segmentId: qR.segmentId,
                landed: rR,
                tail: LR
              }
            })),
            nextSequence: GR
          }
        }(tR, JR),
        fR = function(RR, JR) {
          var GR;
          let yR = RR.dom.reduce(((RR, JR) => {
            let {
              sequence: GR
            } = JR;
            return Math.max(RR, GR + 1)
          }), null !== (GR = JR.nextDomSequence) && void 0 !== GR ? GR : 0);
          const tR = [...RR.domTails].sort(((RR, JR) => RR.chunkIndex - JR.chunkIndex || RR.fromChar - JR.fromChar)),
            uR = [];
          for (const ZR of tR) {
            const RR = uR[uR.length - 1],
              JR = (null === RR || void 0 === RR ? void 0 : RR.chunkIndex) === ZR.chunkIndex;
            ZR.fromChar === (JR ? RR.text.length : 0) && (JR ? (RR.text += ZR.text, RR.last = ZR) : uR.push({
              chunkIndex: ZR.chunkIndex,
              sequence: yR++,
              text: ZR.text,
              last: ZR
            }))
          }
          return {
            tails: uR,
            nextSequence: yR
          }
        }(tR, JR),
        VR = {
          videoSegmentIds: [],
          telemetrySequences: [],
          domSequences: [],
          domTailChunks: []
        };
      let KR = !1;
      const wR = async tR => {
        if (qR()) {
          const qR = await LR(RR, JR, ZR);
          if ("retryLater" === tR && "uploaded" === qR) try {
            var uR;
            const GR = fR.tails.find((RR => {
                let {
                  chunkIndex: JR
                } = RR;
                return !VR.domTailChunks.includes(JR)
              })),
              yR = null !== (uR = null === GR || void 0 === GR ? void 0 : GR.sequence) && void 0 !== uR ? uR : fR.nextSequence;
            await RR.store.forgetSent({
              ...JR,
              nextVideoSequence: iR.nextSequence,
              nextDomSequence: yR
            }, VR)
          } catch (nR) {
            console.warn(`Session replay couldn't drop what it sent of ${JR.recordingId} from its journal.`, nR)
          }
          if ("refused" === qR && yR.size > 0) return {
            ...GR,
            outcome: "refused"
          }
        }
        return {
          ...GR,
          outcome: tR
        }
      };
      for (const {
          segmentId: LR,
          landed: UR,
          tail: WR
        }
        of iR.segments)
        if (!yR.has(LR)) {
          if (null !== UR && ZR.videoSegments.push(UR), null !== WR) {
            const yR = await aR(RR, JR, {
              kind: "video",
              sequence: WR.sequence,
              contentType: "video/mp4",
              bytes: () => RR.mux(WR.header, WR.chunks)
            });
            if ("retryLater" === yR) return await wR(yR);
            "refused" === yR ? KR = !0 : (ZR.videoSegments.push({
              sequence: WR.sequence,
              ...gR(WR.header, WR.chunks)
            }), GR.videoSegments++)
          }
          VR.videoSegmentIds.push(LR)
        } const rR = [...tR.telemetry].sort(((RR, JR) => RR.sequence - JR.sequence));
      for (const LR of rR) {
        const yR = LR.landed ? "uploaded" : await aR(RR, JR, {
          kind: "telemetry",
          sequence: LR.sequence,
          contentType: "application/octet-stream",
          bytes: async () => LR.bytes
        });
        if ("retryLater" === yR) return await wR(yR);
        VR.telemetrySequences.push(LR.sequence), "refused" !== yR ? (ZR.telemetrySegments.push({
          sequence: LR.sequence,
          startMs: Math.round(LR.startMs),
          endMs: Math.round(LR.endMs)
        }), GR.telemetrySegments++) : KR = !0
      }
      const eR = [...tR.dom].sort(((RR, JR) => RR.sequence - JR.sequence));
      for (const {
          sequence: LR,
          chunk: UR,
          bytes: WR
        }
        of eR) {
        const yR = null === WR ? "uploaded" : await aR(RR, JR, {
          kind: "dom",
          sequence: LR,
          contentType: "application/octet-stream",
          bytes: async () => WR
        });
        if ("retryLater" === yR) return await wR(yR);
        VR.domSequences.push(LR), uR.push({
          sequence: LR,
          ...UR
        }), "uploaded" === yR && GR.domSegments++
      }
      for (const {
          chunkIndex: LR,
          sequence: UR,
          text: WR,
          last: AR
        }
        of fR.tails) {
        let yR;
        const tR = await aR(RR, JR, {
          kind: "dom",
          sequence: UR,
          contentType: "application/octet-stream",
          bytes: async () => (yR = await RR.packDom(WR), yR.bytes.buffer)
        });
        if ("retryLater" === tR) return await wR(tR);
        if (VR.domTailChunks.push(LR), "refused" === tR) {
          KR = !0;
          continue
        }
        const {
          bytes: ZR,
          inflatedBytes: qR
        } = yR, {
          startMs: iR,
          endMs: fR,
          summary: rR
        } = AR;
        uR.push({
          sequence: UR,
          startMs: iR,
          endMs: fR,
          byteLength: ZR.byteLength,
          summary: {
            ...rR,
            size: qR
          }
        }), GR.domSegments++
      }
      return yR.size > 0 ? await wR("retryLater") : qR() ? {
        ...GR,
        outcome: await LR(RR, JR, ZR)
      } : KR ? {
        ...GR,
        outcome: "refused"
      } : GR
    }
    var NR = GR(41041),
      DR = GR(41060);
    async function HR() {
      const RR = "undefined" === typeof navigator ? void 0 : navigator.locks;
      if (!wR.e.supported || void 0 === RR) return;
      const JR = new wR.e,
        GR = new NR.e,
        iR = new uR.d,
        fR = await async function(RR) {
          const JR = [];
          for (const yR of await RR.store.listRecordings()) {
            let tR = {
              recordingId: yR.recordingId,
              outcome: "live",
              videoSegments: 0,
              telemetrySegments: 0,
              domSegments: 0
            };
            try {
              await RR.withLock(yR.recordingId, (async () => {
                const JR = (await RR.store.listRecordings()).find((RR => {
                  let {
                    recordingId: JR
                  } = RR;
                  return JR === yR.recordingId
                }));
                if (void 0 !== JR) {
                  try {
                    tR = await xR(RR, JR)
                  } catch (GR) {
                    console.warn(`Session replay couldn't recover what an earlier page load left of ${yR.recordingId}; forgetting it.`, GR), tR = {
                      ...tR,
                      outcome: "failed"
                    }
                  }
                  "retryLater" !== tR.outcome && await RR.store.deleteRecording(yR.recordingId)
                } else tR = {
                  ...tR,
                  outcome: "nothing"
                }
              }))
            } catch (GR) {
              console.warn(`Session replay couldn't forget ${yR.recordingId}'s journal.`, GR)
            }
            JR.push(tR)
          }
          return JR
        }({
          store: JR,
          transportFor: RR => {
            var JR;
            return new DR.c((null !== (JR = RR.endpoints) && void 0 !== JR ? JR : (0, qR.c)()).segmentUploadUrl, {
              relay: GR.for(RR)
            })
          },
          postManifest: (RR, JR) => {
            var GR;
            return (0, KR.b)((null !== (GR = RR.endpoints) && void 0 !== GR ? GR : (0, qR.c)()).manifestUrl, JR)
          },
          withLock: async (JR, GR) => {
            await RR.request((0, rR.w)(JR), {
              ifAvailable: !0
            }, (async RR => {
              null !== RR && await GR()
            }))
          },
          mux: bR,
          packDom: RR => iR.pack(RR).catch((() => (0, ZR.d)(RR))),
          releaseJoined: VR,
          nowMs: Date.now,
          lateUploadUntilMs: RR => {
            var JR;
            return null !== (JR = RR.lateUploadUntilMs) && void 0 !== JR ? JR : RR.expiresAtMs + yR.d
          },
          mayStartUpload: () => !0
        }).finally((() => {
          iR.close()
        }));
      for (const yR of fR) "live" !== yR.outcome && console.info(`Session replay: ${yR.outcome} what an earlier page load left of ${yR.recordingId} (${yR.videoSegments} video, ${yR.telemetrySegments} telemetry, ${yR.domSegments} page recording).`);
      0 === (await JR.listRecordings()).length && tR.i.removeItem(rR.m)
    }
  },
  41175: () => {}
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);