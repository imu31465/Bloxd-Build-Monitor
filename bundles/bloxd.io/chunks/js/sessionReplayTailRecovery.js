export const id = 65;
export const ids = [65];
export const modules = {
  41234: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      recoverReplayTails: () => Wb
    });
    var eb = Mb(41157),
      Hb = Mb(43),
      pb = Mb(41152),
      Vb = Mb(41129),
      gb = Mb(41155),
      lb = Mb(1280);
    const Lb = 35e3;
    async function Ib(bb, wb, Mb) {
      const eb = {
          token: bb.token,
          sequence: wb
        },
        Hb = (0, lb.t)(Lb),
        pb = void 0 === Mb ? Hb : (0, lb.m)([Mb, Hb]);
      let Vb = !1;
      try {
        const wb = await fetch(bb.releaseUrl, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain"
          },
          body: JSON.stringify(eb),
          signal: pb
        });
        if (503 === wb.status) {
          const {
            reason: bb
          } = await wb.json();
          Vb = "release_retrying" === bb || "shutting_down" === bb
        }
        if (!wb.ok) throw new Error(`HTTP ${wb.status}`);
        const Mb = await wb.json();
        return "stored" === Mb.outcome ? Mb.stored : null
      } catch (gb) {
        if (pb.aborted || Vb) throw gb;
        return console.warn(`Session replay couldn't ask the part joiner about video segment ${wb}; uploading it from the journal.`, gb), null
      }
    }
    var Ob = Mb(41181),
      Ub = Mb(41213),
      tb = Mb(5541),
      Cb = Mb(41189);
    async function Eb(bb, wb, Mb) {
      if (!bb.mayStartUpload()) return "retryLater";
      const {
        kind: eb,
        sequence: Hb,
        contentType: pb
      } = Mb;
      let Vb;
      try {
        Vb = await Mb.bytes()
      } catch (gb) {
        return console.warn(`Session replay couldn't mux late ${eb} segment ${Hb}; skipping it.`, gb), "refused"
      }
      try {
        const Mb = bb.transportFor(wb),
          gb = await Mb.requestPutUrl({
            uploadToken: wb.uploadToken,
            kind: eb,
            sequence: Hb,
            contentType: pb,
            byteLength: Vb.byteLength,
            late: !0
          });
        return "rejected" in gb ? (console.warn(`Session replay late ${eb} segment ${Hb} refused: ${gb.reason}`), gb.retryable ? "retryLater" : "refused") : (await Mb.put(gb.uploadUrl, Vb, pb, gb.ifNoneMatch), "uploaded")
      } catch (gb) {
        return console.warn(`Session replay late ${eb} segment ${Hb} upload failed; trying again later.`, gb), "retryLater"
      }
    }
    async function Fb(bb, wb, Mb) {
      var eb;
      const Hb = bb.nowMs(),
        pb = (null !== (eb = Mb.domSegments) && void 0 !== eb ? eb : []).filter((bb => bb.endMs <= Hb));
      for (const Vb of [...Mb.videoSegments, ...Mb.telemetrySegments, ...pb]) Mb.endedAtMs = Math.max(Mb.endedAtMs, Vb.endMs);
      for (const Vb of (0, Cb.f)({
          uploadToken: wb.uploadToken,
          manifest: Mb,
          creatorGrants: [],
          late: !0
        })) {
        const Mb = await bb.postManifest(wb, Vb);
        if ("uploaded" !== Mb) return Mb
      }
      return "uploaded"
    }
    var Bb = Mb(41237),
      sb = Mb(41258),
      mb = Mb(41316),
      hb = Mb(41348),
      zb = Mb(41327);
    class Xb {
      constructor(bb, wb, Mb, eb, Hb) {
        this.frameDurationS = Mb, this.onFragment = Hb, this.firstTimestampUs = void 0, this.lastTimestampUs = void 0, this.output = void 0, this.source = void 0, this.pending = void 0, this.chunkCount = 0, this.boxes = [], this.addingTimestampUs = null, this.firstTimestampUs = wb, this.lastTimestampUs = wb;
        const pb = bb => {
          this.boxes.push(bb)
        };
        this.output = new Bb.c({
          format: new sb.g({
            fastStart: "fragmented",
            minimumFragmentDuration: eb,
            onFtyp: pb,
            onMoov: pb,
            onMoof: pb,
            onMdat: bb => {
              pb(bb), this.fragmentDone()
            }
          }),
          target: new mb.d
        }), this.source = new hb.i(bb), this.output.addVideoTrack(this.source), this.pending = this.output.start()
      }
      get durationUs() {
        return this.lastTimestampUs - this.firstTimestampUs
      }
      add(bb, wb) {
        const Mb = new Uint8Array(bb.byteLength);
        bb.copyTo(Mb), this.addData(Mb, bb.type, bb.timestamp, wb)
      }
      addData(bb, wb, Mb, eb) {
        const Hb = new zb.e(bb, wb, (Mb - this.firstTimestampUs) / 1e6, this.frameDurationS),
          pb = 0 === this.chunkCount++;
        this.lastTimestampUs = Math.max(this.lastTimestampUs, Mb), this.pending = this.pending.then((() => (this.addingTimestampUs = Mb, this.source.add(Hb, pb ? {
          decoderConfig: eb
        } : void 0))))
      }
      async finish() {
        await this.pending, this.addingTimestampUs = null, await this.output.finalize()
      }
      fragmentDone() {
        var bb;
        const wb = xb(this.boxes);
        this.boxes = [], this.onFragment({
          bytes: wb,
          endUs: null !== (bb = this.addingTimestampUs) && void 0 !== bb ? bb : this.lastTimestampUs + 1e6 * this.frameDurationS
        })
      }
    }

    function xb(bb) {
      const wb = new Uint8Array(bb.reduce(((bb, wb) => bb + wb.byteLength), 0));
      let Mb = 0;
      for (const eb of bb) wb.set(eb, Mb), Mb += eb.byteLength;
      return wb
    }
    Mb(41179);

    function jb(bb, wb, Mb, eb) {
      const Hb = bb / 1e3 + Mb;
      return {
        startMs: Hb,
        endMs: Hb + wb / 1e3 + 1e3 / eb
      }
    }
    const Kb = 2,
      rb = 18e5;

    function Rb(bb, wb) {
      const Mb = wb[wb.length - 1].timestampUs - bb.firstTimestampUs,
        {
          startMs: eb,
          endMs: Hb
        } = jb(bb.firstTimestampUs, Mb, bb.epochOffsetMs, bb.fps);
      return {
        startMs: Math.round(eb),
        endMs: Math.round(Hb),
        width: bb.width,
        height: bb.height,
        codec: bb.codec
      }
    }
    async function Db(bb, wb) {
      const Mb = [],
        eb = new Xb(bb.containerCodec, bb.firstTimestampUs, 1 / bb.fps, Kb, (bb => {
          let {
            bytes: wb
          } = bb;
          Mb.push(wb)
        }));
      for (const Hb of wb) eb.addData(Hb.data, Hb.key ? "key" : "delta", Hb.timestampUs, bb.decoderConfig);
      return await eb.finish(), xb(Mb).buffer
    }

    function cb(bb, wb, Mb) {
      var eb;
      const Hb = null === (eb = bb.videoProgress) || void 0 === eb ? void 0 : eb.find((bb => bb.segmentId === wb));
      return void 0 !== Hb && (null === Mb || Hb.partsLanded > Mb.partsLanded) ? Hb : Mb
    }
    const Yb = 6e5;
    async function Zb(bb, wb) {
      const Mb = {
        recordingId: wb.recordingId,
        outcome: "nothing",
        videoSegments: 0,
        telemetrySegments: 0,
        domSegments: 0
      };
      if (bb.nowMs() > bb.lateUploadUntilMs(wb) - Yb) return {
        ...Mb,
        outcome: "expired"
      };
      const eb = new Set;
      let Hb;
      try {
        Hb = await async function(bb, wb, Mb, eb) {
          const {
            partJoiner: Hb
          } = wb;
          if (void 0 === Hb) return Mb;
          const pb = bb.nowMs() > wb.manifest.endedAtMs + rb,
            Vb = new Map;
          for (const {
              header: lb,
              sequence: Lb,
              progress: Ib
            }
            of Mb.video)
            if (null !== Lb && null === cb(wb, lb.segmentId, Ib)) {
              let wb;
              try {
                wb = await bb.releaseJoined(Hb, Lb)
              } catch (gb) {
                if (!pb) {
                  eb.add(lb.segmentId);
                  continue
                }
                console.warn(`Session replay's part joiner didn't answer about video segment ${Lb} in time; uploading it from the journal.`, gb), wb = null
              }
              null !== wb && Vb.set(lb.segmentId, wb)
            } return {
            ...Mb,
            joined: Vb
          }
        }(bb, wb, await bb.store.read(wb), eb)
      } catch (Bb) {
        return console.warn(`Session replay couldn't read what an earlier page load left of ${wb.recordingId}; trying again later.`, Bb), {
          ...Mb,
          outcome: "retryLater"
        }
      }
      const pb = [],
        Vb = {
          ...wb.manifest,
          videoSegments: [],
          telemetrySegments: [],
          ...Hb.dom.length + Hb.domTails.length > 0 ? {
            domSegments: pb
          } : {}
        },
        gb = () => Vb.videoSegments.length + Vb.telemetrySegments.length + pb.length > 0,
        lb = function(bb, wb) {
          let Mb = bb.video.reduce(((bb, wb) => {
            let {
              sequence: Mb
            } = wb;
            return null === Mb ? bb : Math.max(bb, Mb + 1)
          }), wb.nextVideoSequence);
          return {
            segments: [...bb.video].sort(((bb, wb) => bb.header.segmentId - wb.header.segmentId)).map((eb => {
              var Hb, pb, Vb;
              let {
                header: gb,
                sequence: lb,
                progress: Lb,
                chunks: Ib
              } = eb;
              const Ob = cb(wb, gb.segmentId, Lb),
                Ub = null === (Hb = bb.joined) || void 0 === Hb ? void 0 : Hb.get(gb.segmentId),
                tb = null !== lb && void 0 !== Ub ? {
                  sequence: lb,
                  ...Ub.meta
                } : null !== lb && null !== Ob ? {
                  sequence: lb,
                  ...Ob.meta,
                  startMs: Math.round(Ob.meta.startMs),
                  endMs: Math.round(Ob.meta.endMs),
                  parts: Ob.partsLanded
                } : null,
                Cb = null !== (pb = null !== (Vb = null === Ub || void 0 === Ub ? void 0 : Ub.completeUntilUs) && void 0 !== Vb ? Vb : null === Ob || void 0 === Ob ? void 0 : Ob.completeUntilUs) && void 0 !== pb ? pb : null,
                Eb = function(bb) {
                  const wb = [...bb].sort(((bb, wb) => bb.index - wb.index)),
                    Mb = [];
                  for (const eb of wb) {
                    if (0 === Mb.length ? !eb.key : eb.index !== Mb[0].index + Mb.length) break;
                    Mb.push(eb)
                  }
                  return Mb
                }(null === Cb ? Ib : Ib.filter((bb => bb.timestampUs >= Cb))),
                Fb = 0 === Eb.length ? null : {
                  sequence: Mb++,
                  header: {
                    ...gb,
                    firstTimestampUs: Eb[0].timestampUs
                  },
                  chunks: Eb
                };
              return {
                segmentId: gb.segmentId,
                landed: tb,
                tail: Fb
              }
            })),
            nextSequence: Mb
          }
        }(Hb, wb),
        Lb = function(bb, wb) {
          var Mb;
          let eb = bb.dom.reduce(((bb, wb) => {
            let {
              sequence: Mb
            } = wb;
            return Math.max(bb, Mb + 1)
          }), null !== (Mb = wb.nextDomSequence) && void 0 !== Mb ? Mb : 0);
          const Hb = [...bb.domTails].sort(((bb, wb) => bb.chunkIndex - wb.chunkIndex || bb.fromChar - wb.fromChar)),
            pb = [];
          for (const Vb of Hb) {
            const bb = pb[pb.length - 1],
              wb = (null === bb || void 0 === bb ? void 0 : bb.chunkIndex) === Vb.chunkIndex;
            Vb.fromChar === (wb ? bb.text.length : 0) && (wb ? (bb.text += Vb.text, bb.last = Vb) : pb.push({
              chunkIndex: Vb.chunkIndex,
              sequence: eb++,
              text: Vb.text,
              last: Vb
            }))
          }
          return {
            tails: pb,
            nextSequence: eb
          }
        }(Hb, wb),
        Ib = {
          videoSegmentIds: [],
          telemetrySequences: [],
          domSequences: [],
          domTailChunks: []
        };
      let Ob = !1;
      const Ub = async Hb => {
        if (gb()) {
          const gb = await Fb(bb, wb, Vb);
          if ("retryLater" === Hb && "uploaded" === gb) try {
            var pb;
            const Mb = Lb.tails.find((bb => {
                let {
                  chunkIndex: wb
                } = bb;
                return !Ib.domTailChunks.includes(wb)
              })),
              eb = null !== (pb = null === Mb || void 0 === Mb ? void 0 : Mb.sequence) && void 0 !== pb ? pb : Lb.nextSequence;
            await bb.store.forgetSent({
              ...wb,
              nextVideoSequence: lb.nextSequence,
              nextDomSequence: eb
            }, Ib)
          } catch (Bb) {
            console.warn(`Session replay couldn't drop what it sent of ${wb.recordingId} from its journal.`, Bb)
          }
          if ("refused" === gb && eb.size > 0) return {
            ...Mb,
            outcome: "refused"
          }
        }
        return {
          ...Mb,
          outcome: Hb
        }
      };
      for (const {
          segmentId: Fb,
          landed: sb,
          tail: mb
        }
        of lb.segments)
        if (!eb.has(Fb)) {
          if (null !== sb && Vb.videoSegments.push(sb), null !== mb) {
            const eb = await Eb(bb, wb, {
              kind: "video",
              sequence: mb.sequence,
              contentType: "video/mp4",
              bytes: () => bb.mux(mb.header, mb.chunks)
            });
            if ("retryLater" === eb) return await Ub(eb);
            "refused" === eb ? Ob = !0 : (Vb.videoSegments.push({
              sequence: mb.sequence,
              ...Rb(mb.header, mb.chunks)
            }), Mb.videoSegments++)
          }
          Ib.videoSegmentIds.push(Fb)
        } const tb = [...Hb.telemetry].sort(((bb, wb) => bb.sequence - wb.sequence));
      for (const Fb of tb) {
        const eb = Fb.landed ? "uploaded" : await Eb(bb, wb, {
          kind: "telemetry",
          sequence: Fb.sequence,
          contentType: "application/octet-stream",
          bytes: async () => Fb.bytes
        });
        if ("retryLater" === eb) return await Ub(eb);
        Ib.telemetrySequences.push(Fb.sequence), "refused" !== eb ? (Vb.telemetrySegments.push({
          sequence: Fb.sequence,
          startMs: Math.round(Fb.startMs),
          endMs: Math.round(Fb.endMs)
        }), Mb.telemetrySegments++) : Ob = !0
      }
      const Cb = [...Hb.dom].sort(((bb, wb) => bb.sequence - wb.sequence));
      for (const {
          sequence: Fb,
          chunk: sb,
          bytes: mb
        }
        of Cb) {
        const eb = null === mb ? "uploaded" : await Eb(bb, wb, {
          kind: "dom",
          sequence: Fb,
          contentType: "application/octet-stream",
          bytes: async () => mb
        });
        if ("retryLater" === eb) return await Ub(eb);
        Ib.domSequences.push(Fb), pb.push({
          sequence: Fb,
          ...sb
        }), "uploaded" === eb && Mb.domSegments++
      }
      for (const {
          chunkIndex: Fb,
          sequence: sb,
          text: mb,
          last: hb
        }
        of Lb.tails) {
        let eb;
        const Hb = await Eb(bb, wb, {
          kind: "dom",
          sequence: sb,
          contentType: "application/octet-stream",
          bytes: async () => (eb = await bb.packDom(mb), eb.bytes.buffer)
        });
        if ("retryLater" === Hb) return await Ub(Hb);
        if (Ib.domTailChunks.push(Fb), "refused" === Hb) {
          Ob = !0;
          continue
        }
        const {
          bytes: Vb,
          inflatedBytes: gb
        } = eb, {
          startMs: lb,
          endMs: Lb,
          summary: tb
        } = hb;
        pb.push({
          sequence: sb,
          startMs: lb,
          endMs: Lb,
          byteLength: Vb.byteLength,
          summary: {
            ...tb,
            size: gb
          }
        }), Mb.domSegments++
      }
      return eb.size > 0 ? await Ub("retryLater") : gb() ? {
        ...Mb,
        outcome: await Fb(bb, wb, Vb)
      } : Ob ? {
        ...Mb,
        outcome: "refused"
      } : Mb
    }
    var fb = Mb(41169),
      Ab = Mb(41197);
    async function Wb() {
      const bb = "undefined" === typeof navigator ? void 0 : navigator.locks;
      if (!Ub.e.supported || void 0 === bb) return;
      const wb = new Ub.e,
        Mb = new fb.b,
        lb = new pb.d,
        Lb = await async function(bb) {
          const wb = [];
          for (const eb of await bb.store.listRecordings()) {
            let Hb = {
              recordingId: eb.recordingId,
              outcome: "live",
              videoSegments: 0,
              telemetrySegments: 0,
              domSegments: 0
            };
            try {
              await bb.withLock(eb.recordingId, (async () => {
                const wb = (await bb.store.listRecordings()).find((bb => {
                  let {
                    recordingId: wb
                  } = bb;
                  return wb === eb.recordingId
                }));
                if (void 0 !== wb) {
                  try {
                    Hb = await Zb(bb, wb)
                  } catch (Mb) {
                    console.warn(`Session replay couldn't recover what an earlier page load left of ${eb.recordingId}; forgetting it.`, Mb), Hb = {
                      ...Hb,
                      outcome: "failed"
                    }
                  }
                  "retryLater" !== Hb.outcome && await bb.store.deleteRecording(eb.recordingId)
                } else Hb = {
                  ...Hb,
                  outcome: "nothing"
                }
              }))
            } catch (Mb) {
              console.warn(`Session replay couldn't forget ${eb.recordingId}'s journal.`, Mb)
            }
            wb.push(Hb)
          }
          return wb
        }({
          store: wb,
          transportFor: bb => {
            var wb;
            return new Ab.f((null !== (wb = bb.endpoints) && void 0 !== wb ? wb : (0, gb.c)()).segmentUploadUrl, {
              relay: Mb.for(bb)
            })
          },
          postManifest: (bb, wb) => {
            var Mb;
            return (0, Ob.b)((null !== (Mb = bb.endpoints) && void 0 !== Mb ? Mb : (0, gb.c)()).manifestUrl, wb)
          },
          withLock: async (wb, Mb) => {
            await bb.request((0, tb.u)(wb), {
              ifAvailable: !0
            }, (async bb => {
              null !== bb && await Mb()
            }))
          },
          mux: Db,
          packDom: bb => lb.pack(bb).catch((() => (0, Vb.e)(bb))),
          releaseJoined: Ib,
          nowMs: Date.now,
          lateUploadUntilMs: bb => {
            var wb;
            return null !== (wb = bb.lateUploadUntilMs) && void 0 !== wb ? wb : bb.expiresAtMs + eb.d
          },
          mayStartUpload: () => !0
        }).finally((() => {
          lb.close()
        }));
      for (const eb of Lb) "live" !== eb.outcome && console.info(`Session replay: ${eb.outcome} what an earlier page load left of ${eb.recordingId} (${eb.videoSegments} video, ${eb.telemetrySegments} telemetry, ${eb.domSegments} page recording).`);
      0 === (await wb.listRecordings()).length && Hb.i.removeItem(tb.j)
    }
  },
  41318: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);