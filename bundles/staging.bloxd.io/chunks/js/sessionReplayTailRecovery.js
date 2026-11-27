export const id = 65;
export const ids = [65];
export const modules = {
  41466: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      recoverReplayTails: () => gr
    });
    var Zr = Qr(41385),
      Wr = Qr(43),
      ar = Qr(41371),
      jr = Qr(41355),
      Ir = Qr(41379),
      fr = Qr(1267);
    const Er = 35e3;
    async function pr(rr, Sr, Qr) {
      const Zr = {
          token: rr.token,
          sequence: Sr
        },
        Wr = (0, fr.o)(Er),
        ar = void 0 === Qr ? Wr : (0, fr.i)([Qr, Wr]);
      let jr = !1;
      try {
        const Sr = await fetch(rr.releaseUrl, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain"
          },
          body: JSON.stringify(Zr),
          signal: ar
        });
        if (503 === Sr.status) {
          const {
            reason: rr
          } = await Sr.json();
          jr = "release_retrying" === rr || "shutting_down" === rr
        }
        if (!Sr.ok) throw new Error(`HTTP ${Sr.status}`);
        const Qr = await Sr.json();
        return "stored" === Qr.outcome ? Qr.stored : null
      } catch (Ir) {
        if (ar.aborted || jr) throw Ir;
        return console.warn(`Session replay couldn't ask the part joiner about video segment ${Sr}; uploading it from the journal.`, Ir), null
      }
    }
    var xr = Qr(41405),
      mr = Qr(41438),
      Nr = Qr(5459),
      Ur = Qr(41413);
    async function tr(rr, Sr, Qr) {
      if (!rr.mayStartUpload()) return "retryLater";
      const {
        kind: Zr,
        sequence: Wr,
        contentType: ar
      } = Qr;
      let jr;
      try {
        jr = await Qr.bytes()
      } catch (Ir) {
        return console.warn(`Session replay couldn't mux late ${Zr} segment ${Wr}; skipping it.`, Ir), "refused"
      }
      try {
        const Qr = rr.transportFor(Sr),
          Ir = await Qr.requestPutUrl({
            uploadToken: Sr.uploadToken,
            kind: Zr,
            sequence: Wr,
            contentType: ar,
            byteLength: jr.byteLength,
            late: !0
          });
        return "rejected" in Ir ? (console.warn(`Session replay late ${Zr} segment ${Wr} refused: ${Ir.reason}`), Ir.retryable ? "retryLater" : "refused") : (await Qr.put(Ir.uploadUrl, jr, ar, Ir.ifNoneMatch), "uploaded")
      } catch (Ir) {
        return console.warn(`Session replay late ${Zr} segment ${Wr} upload failed; trying again later.`, Ir), "retryLater"
      }
    }
    async function hr(rr, Sr, Qr) {
      var Zr;
      const Wr = rr.nowMs(),
        ar = (null !== (Zr = Qr.domSegments) && void 0 !== Zr ? Zr : []).filter((rr => rr.endMs <= Wr));
      for (const jr of [...Qr.videoSegments, ...Qr.telemetrySegments, ...ar]) Qr.endedAtMs = Math.max(Qr.endedAtMs, jr.endMs);
      for (const jr of (0, Ur.c)({
          uploadToken: Sr.uploadToken,
          manifest: Qr,
          creatorGrants: [],
          late: !0
        })) {
        const Qr = await rr.postManifest(Sr, jr);
        if ("uploaded" !== Qr) return Qr
      }
      return "uploaded"
    }
    var zr = Qr(41470),
      Yr = Qr(41486),
      nr = Qr(41539),
      er = Qr(41566),
      Kr = Qr(41552);
    class yr {
      constructor(rr, Sr, Qr, Zr, Wr) {
        this.frameDurationS = Qr, this.onFragment = Wr, this.firstTimestampUs = void 0, this.lastTimestampUs = void 0, this.output = void 0, this.source = void 0, this.pending = void 0, this.chunkCount = 0, this.boxes = [], this.addingTimestampUs = null, this.firstTimestampUs = Sr, this.lastTimestampUs = Sr;
        const ar = rr => {
          this.boxes.push(rr)
        };
        this.output = new zr.e({
          format: new Yr.i({
            fastStart: "fragmented",
            minimumFragmentDuration: Zr,
            onFtyp: ar,
            onMoov: ar,
            onMoof: ar,
            onMdat: rr => {
              ar(rr), this.fragmentDone()
            }
          }),
          target: new nr.g
        }), this.source = new er.i(rr), this.output.addVideoTrack(this.source), this.pending = this.output.start()
      }
      get durationUs() {
        return this.lastTimestampUs - this.firstTimestampUs
      }
      add(rr, Sr) {
        const Qr = new Uint8Array(rr.byteLength);
        rr.copyTo(Qr), this.addData(Qr, rr.type, rr.timestamp, Sr)
      }
      addData(rr, Sr, Qr, Zr) {
        const Wr = new Kr.b(rr, Sr, (Qr - this.firstTimestampUs) / 1e6, this.frameDurationS),
          ar = 0 === this.chunkCount++;
        this.lastTimestampUs = Math.max(this.lastTimestampUs, Qr), this.pending = this.pending.then((() => (this.addingTimestampUs = Qr, this.source.add(Wr, ar ? {
          decoderConfig: Zr
        } : void 0))))
      }
      async finish() {
        await this.pending, this.addingTimestampUs = null, await this.output.finalize()
      }
      fragmentDone() {
        var rr;
        const Sr = Br(this.boxes);
        this.boxes = [], this.onFragment({
          bytes: Sr,
          endUs: null !== (rr = this.addingTimestampUs) && void 0 !== rr ? rr : this.lastTimestampUs + 1e6 * this.frameDurationS
        })
      }
    }

    function Br(rr) {
      const Sr = new Uint8Array(rr.reduce(((rr, Sr) => rr + Sr.byteLength), 0));
      let Qr = 0;
      for (const Zr of rr) Sr.set(Zr, Qr), Qr += Zr.byteLength;
      return Sr
    }
    Qr(41403);

    function Tr(rr, Sr, Qr, Zr) {
      const Wr = rr / 1e3 + Qr;
      return {
        startMs: Wr,
        endMs: Wr + Sr / 1e3 + 1e3 / Zr
      }
    }
    const vr = 2,
      Or = 18e5;

    function Lr(rr, Sr) {
      const Qr = Sr[Sr.length - 1].timestampUs - rr.firstTimestampUs,
        {
          startMs: Zr,
          endMs: Wr
        } = Tr(rr.firstTimestampUs, Qr, rr.epochOffsetMs, rr.fps);
      return {
        startMs: Math.round(Zr),
        endMs: Math.round(Wr),
        width: rr.width,
        height: rr.height,
        codec: rr.codec
      }
    }
    async function lr(rr, Sr) {
      const Qr = [],
        Zr = new yr(rr.containerCodec, rr.firstTimestampUs, 1 / rr.fps, vr, (rr => {
          let {
            bytes: Sr
          } = rr;
          Qr.push(Sr)
        }));
      for (const Wr of Sr) Zr.addData(Wr.data, Wr.key ? "key" : "delta", Wr.timestampUs, rr.decoderConfig);
      return await Zr.finish(), Br(Qr).buffer
    }

    function Xr(rr, Sr, Qr) {
      var Zr;
      const Wr = null === (Zr = rr.videoProgress) || void 0 === Zr ? void 0 : Zr.find((rr => rr.segmentId === Sr));
      return void 0 !== Wr && (null === Qr || Wr.partsLanded > Qr.partsLanded) ? Wr : Qr
    }
    const Pr = 6e5;
    async function Hr(rr, Sr) {
      const Qr = {
        recordingId: Sr.recordingId,
        outcome: "nothing",
        videoSegments: 0,
        telemetrySegments: 0,
        domSegments: 0
      };
      if (rr.nowMs() > rr.lateUploadUntilMs(Sr) - Pr) return {
        ...Qr,
        outcome: "expired"
      };
      const Zr = new Set;
      let Wr;
      try {
        Wr = await async function(rr, Sr, Qr, Zr) {
          const {
            partJoiner: Wr
          } = Sr;
          if (void 0 === Wr) return Qr;
          const ar = rr.nowMs() > Sr.manifest.endedAtMs + Or,
            jr = new Map;
          for (const {
              header: fr,
              sequence: Er,
              progress: pr
            }
            of Qr.video)
            if (null !== Er && null === Xr(Sr, fr.segmentId, pr)) {
              let Sr;
              try {
                Sr = await rr.releaseJoined(Wr, Er)
              } catch (Ir) {
                if (!ar) {
                  Zr.add(fr.segmentId);
                  continue
                }
                console.warn(`Session replay's part joiner didn't answer about video segment ${Er} in time; uploading it from the journal.`, Ir), Sr = null
              }
              null !== Sr && jr.set(fr.segmentId, Sr)
            } return {
            ...Qr,
            joined: jr
          }
        }(rr, Sr, await rr.store.read(Sr), Zr)
      } catch (zr) {
        return console.warn(`Session replay couldn't read what an earlier page load left of ${Sr.recordingId}; trying again later.`, zr), {
          ...Qr,
          outcome: "retryLater"
        }
      }
      const ar = [],
        jr = {
          ...Sr.manifest,
          videoSegments: [],
          telemetrySegments: [],
          ...Wr.dom.length + Wr.domTails.length > 0 ? {
            domSegments: ar
          } : {}
        },
        Ir = () => jr.videoSegments.length + jr.telemetrySegments.length + ar.length > 0,
        fr = function(rr, Sr) {
          let Qr = rr.video.reduce(((rr, Sr) => {
            let {
              sequence: Qr
            } = Sr;
            return null === Qr ? rr : Math.max(rr, Qr + 1)
          }), Sr.nextVideoSequence);
          return {
            segments: [...rr.video].sort(((rr, Sr) => rr.header.segmentId - Sr.header.segmentId)).map((Zr => {
              var Wr, ar, jr;
              let {
                header: Ir,
                sequence: fr,
                progress: Er,
                chunks: pr
              } = Zr;
              const xr = Xr(Sr, Ir.segmentId, Er),
                mr = null === (Wr = rr.joined) || void 0 === Wr ? void 0 : Wr.get(Ir.segmentId),
                Nr = null !== fr && void 0 !== mr ? {
                  sequence: fr,
                  ...mr.meta
                } : null !== fr && null !== xr ? {
                  sequence: fr,
                  ...xr.meta,
                  startMs: Math.round(xr.meta.startMs),
                  endMs: Math.round(xr.meta.endMs),
                  parts: xr.partsLanded
                } : null,
                Ur = null !== (ar = null !== (jr = null === mr || void 0 === mr ? void 0 : mr.completeUntilUs) && void 0 !== jr ? jr : null === xr || void 0 === xr ? void 0 : xr.completeUntilUs) && void 0 !== ar ? ar : null,
                tr = function(rr) {
                  const Sr = [...rr].sort(((rr, Sr) => rr.index - Sr.index)),
                    Qr = [];
                  for (const Zr of Sr) {
                    if (0 === Qr.length ? !Zr.key : Zr.index !== Qr[0].index + Qr.length) break;
                    Qr.push(Zr)
                  }
                  return Qr
                }(null === Ur ? pr : pr.filter((rr => rr.timestampUs >= Ur))),
                hr = 0 === tr.length ? null : {
                  sequence: Qr++,
                  header: {
                    ...Ir,
                    firstTimestampUs: tr[0].timestampUs
                  },
                  chunks: tr
                };
              return {
                segmentId: Ir.segmentId,
                landed: Nr,
                tail: hr
              }
            })),
            nextSequence: Qr
          }
        }(Wr, Sr),
        Er = function(rr, Sr) {
          var Qr;
          let Zr = rr.dom.reduce(((rr, Sr) => {
            let {
              sequence: Qr
            } = Sr;
            return Math.max(rr, Qr + 1)
          }), null !== (Qr = Sr.nextDomSequence) && void 0 !== Qr ? Qr : 0);
          const Wr = [...rr.domTails].sort(((rr, Sr) => rr.chunkIndex - Sr.chunkIndex || rr.fromChar - Sr.fromChar)),
            ar = [];
          for (const jr of Wr) {
            const rr = ar[ar.length - 1],
              Sr = (null === rr || void 0 === rr ? void 0 : rr.chunkIndex) === jr.chunkIndex;
            jr.fromChar === (Sr ? rr.text.length : 0) && (Sr ? (rr.text += jr.text, rr.last = jr) : ar.push({
              chunkIndex: jr.chunkIndex,
              sequence: Zr++,
              text: jr.text,
              last: jr
            }))
          }
          return {
            tails: ar,
            nextSequence: Zr
          }
        }(Wr, Sr),
        pr = {
          videoSegmentIds: [],
          telemetrySequences: [],
          domSequences: [],
          domTailChunks: []
        };
      let xr = !1;
      const mr = async Wr => {
        if (Ir()) {
          const Ir = await hr(rr, Sr, jr);
          if ("retryLater" === Wr && "uploaded" === Ir) try {
            var ar;
            const Qr = Er.tails.find((rr => {
                let {
                  chunkIndex: Sr
                } = rr;
                return !pr.domTailChunks.includes(Sr)
              })),
              Zr = null !== (ar = null === Qr || void 0 === Qr ? void 0 : Qr.sequence) && void 0 !== ar ? ar : Er.nextSequence;
            await rr.store.forgetSent({
              ...Sr,
              nextVideoSequence: fr.nextSequence,
              nextDomSequence: Zr
            }, pr)
          } catch (zr) {
            console.warn(`Session replay couldn't drop what it sent of ${Sr.recordingId} from its journal.`, zr)
          }
          if ("refused" === Ir && Zr.size > 0) return {
            ...Qr,
            outcome: "refused"
          }
        }
        return {
          ...Qr,
          outcome: Wr
        }
      };
      for (const {
          segmentId: hr,
          landed: Yr,
          tail: nr
        }
        of fr.segments)
        if (!Zr.has(hr)) {
          if (null !== Yr && jr.videoSegments.push(Yr), null !== nr) {
            const Zr = await tr(rr, Sr, {
              kind: "video",
              sequence: nr.sequence,
              contentType: "video/mp4",
              bytes: () => rr.mux(nr.header, nr.chunks)
            });
            if ("retryLater" === Zr) return await mr(Zr);
            "refused" === Zr ? xr = !0 : (jr.videoSegments.push({
              sequence: nr.sequence,
              ...Lr(nr.header, nr.chunks)
            }), Qr.videoSegments++)
          }
          pr.videoSegmentIds.push(hr)
        } const Nr = [...Wr.telemetry].sort(((rr, Sr) => rr.sequence - Sr.sequence));
      for (const hr of Nr) {
        const Zr = hr.landed ? "uploaded" : await tr(rr, Sr, {
          kind: "telemetry",
          sequence: hr.sequence,
          contentType: "application/octet-stream",
          bytes: async () => hr.bytes
        });
        if ("retryLater" === Zr) return await mr(Zr);
        pr.telemetrySequences.push(hr.sequence), "refused" !== Zr ? (jr.telemetrySegments.push({
          sequence: hr.sequence,
          startMs: Math.round(hr.startMs),
          endMs: Math.round(hr.endMs)
        }), Qr.telemetrySegments++) : xr = !0
      }
      const Ur = [...Wr.dom].sort(((rr, Sr) => rr.sequence - Sr.sequence));
      for (const {
          sequence: hr,
          chunk: Yr,
          bytes: nr
        }
        of Ur) {
        const Zr = null === nr ? "uploaded" : await tr(rr, Sr, {
          kind: "dom",
          sequence: hr,
          contentType: "application/octet-stream",
          bytes: async () => nr
        });
        if ("retryLater" === Zr) return await mr(Zr);
        pr.domSequences.push(hr), ar.push({
          sequence: hr,
          ...Yr
        }), "uploaded" === Zr && Qr.domSegments++
      }
      for (const {
          chunkIndex: hr,
          sequence: Yr,
          text: nr,
          last: er
        }
        of Er.tails) {
        let Zr;
        const Wr = await tr(rr, Sr, {
          kind: "dom",
          sequence: Yr,
          contentType: "application/octet-stream",
          bytes: async () => (Zr = await rr.packDom(nr), Zr.bytes.buffer)
        });
        if ("retryLater" === Wr) return await mr(Wr);
        if (pr.domTailChunks.push(hr), "refused" === Wr) {
          xr = !0;
          continue
        }
        const {
          bytes: jr,
          inflatedBytes: Ir
        } = Zr, {
          startMs: fr,
          endMs: Er,
          summary: Nr
        } = er;
        ar.push({
          sequence: Yr,
          startMs: fr,
          endMs: Er,
          byteLength: jr.byteLength,
          summary: {
            ...Nr,
            size: Ir
          }
        }), Qr.domSegments++
      }
      return Zr.size > 0 ? await mr("retryLater") : Ir() ? {
        ...Qr,
        outcome: await hr(rr, Sr, jr)
      } : xr ? {
        ...Qr,
        outcome: "refused"
      } : Qr
    }
    var qr = Qr(41392),
      Rr = Qr(41420);
    async function gr() {
      const rr = "undefined" === typeof navigator ? void 0 : navigator.locks;
      if (!mr.e.supported || void 0 === rr) return;
      const Sr = new mr.e,
        Qr = new qr.d,
        fr = new ar.c,
        Er = await async function(rr) {
          const Sr = [];
          for (const Zr of await rr.store.listRecordings()) {
            let Wr = {
              recordingId: Zr.recordingId,
              outcome: "live",
              videoSegments: 0,
              telemetrySegments: 0,
              domSegments: 0
            };
            try {
              await rr.withLock(Zr.recordingId, (async () => {
                const Sr = (await rr.store.listRecordings()).find((rr => {
                  let {
                    recordingId: Sr
                  } = rr;
                  return Sr === Zr.recordingId
                }));
                if (void 0 !== Sr) {
                  try {
                    Wr = await Hr(rr, Sr)
                  } catch (Qr) {
                    console.warn(`Session replay couldn't recover what an earlier page load left of ${Zr.recordingId}; forgetting it.`, Qr), Wr = {
                      ...Wr,
                      outcome: "failed"
                    }
                  }
                  "retryLater" !== Wr.outcome && await rr.store.deleteRecording(Zr.recordingId)
                } else Wr = {
                  ...Wr,
                  outcome: "nothing"
                }
              }))
            } catch (Qr) {
              console.warn(`Session replay couldn't forget ${Zr.recordingId}'s journal.`, Qr)
            }
            Sr.push(Wr)
          }
          return Sr
        }({
          store: Sr,
          transportFor: rr => {
            var Sr;
            return new Rr.d((null !== (Sr = rr.endpoints) && void 0 !== Sr ? Sr : (0, Ir.b)()).segmentUploadUrl, {
              relay: Qr.for(rr)
            })
          },
          postManifest: (rr, Sr) => {
            var Qr;
            return (0, xr.e)((null !== (Qr = rr.endpoints) && void 0 !== Qr ? Qr : (0, Ir.b)()).manifestUrl, Sr)
          },
          withLock: async (Sr, Qr) => {
            await rr.request((0, Nr.w)(Sr), {
              ifAvailable: !0
            }, (async rr => {
              null !== rr && await Qr()
            }))
          },
          mux: lr,
          packDom: rr => fr.pack(rr).catch((() => (0, jr.b)(rr))),
          releaseJoined: pr,
          nowMs: Date.now,
          lateUploadUntilMs: rr => {
            var Sr;
            return null !== (Sr = rr.lateUploadUntilMs) && void 0 !== Sr ? Sr : rr.expiresAtMs + Zr.c
          },
          mayStartUpload: () => !0
        }).finally((() => {
          fr.close()
        }));
      for (const Zr of Er) "live" !== Zr.outcome && console.info(`Session replay: ${Zr.outcome} what an earlier page load left of ${Zr.recordingId} (${Zr.videoSegments} video, ${Zr.telemetrySegments} telemetry, ${Zr.domSegments} page recording).`);
      0 === (await Sr.listRecordings()).length && Wr.j.removeItem(Nr.n)
    }
  },
  41545: () => {}
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);