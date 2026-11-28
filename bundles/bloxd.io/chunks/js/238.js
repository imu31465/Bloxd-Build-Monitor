export const id = 238;
export const ids = [238];
export const modules = {
  53706: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      loadGlbAsset: () => rw,
      loadGlbTree: () => Kw
    });
    var eb = Mb(39148),
      Hb = Mb(160),
      pb = Mb(1277);

    function Vb(bb) {
      return (0, Hb.isDiscordClient)() ? `https://${pb.c.discordDomain}/${bb.href}` : bb.href
    }
    const gb = {
      scriptUrl: Vb(new Mb.U(Mb(53710))),
      wasmBinaryUrl: Vb(new Mb.U(Mb(53719)))
    };
    var lb = Mb(2471),
      Lb = Mb(37394),
      Ib = Mb.n(Lb);

    function Ob() {
      return Ib()('(()=>{class bb extends Error{}function wb(wb,Mb){const eb=wb._malloc(Mb);if(0===eb)throw new bb(`Draco: the decoder\'s heap refused ${Mb} bytes`);return eb}function Mb(Mb,eb,Hb,pb){let Vb=null,gb=null,lb=null;try{Vb=new Mb.Decoder,gb=new Mb.DecoderBuffer,gb.Init(eb,eb.byteLength);let Lb=0;const Ib=Vb.GetEncodedGeometryType(gb);if(Ib===Mb.TRIANGULAR_MESH){const wb=new Mb.Mesh;lb=wb;const eb=Vb.DecodeBufferToMesh(gb,wb);if(!eb.ok()||0===wb.ptr)throw new bb(eb.error_msg());Lb=3*wb.num_faces()}else{if(Ib!==Mb.POINT_CLOUD)throw new bb(`Draco: Cannot decode invalid geometry type ${Ib}`);{const wb=new Mb.PointCloud;lb=wb;const eb=Vb.DecodeBufferToPointCloud(gb,wb);if(!eb.ok()||!wb.ptr)throw new bb(eb.error_msg())}}const Ob=lb.num_points();if(Ob!==pb.vertices||Lb!==pb.indices)throw new bb(`Draco: decoded ${Ob} vertices and ${Lb} indices, the accessors declare ${pb.vertices} and ${pb.indices}`);const Ub=function(bb){return{[bb.DT_FLOAT32]:Float32Array,[bb.DT_INT8]:Int8Array,[bb.DT_INT16]:Int16Array,[bb.DT_INT32]:Int32Array,[bb.DT_UINT8]:Uint8Array,[bb.DT_UINT16]:Uint16Array,[bb.DT_UINT32]:Uint32Array}}(Mb),tb=[];for(const wb of Object.keys(Hb)){const Mb=Hb[wb],eb=pb.components[wb],gb=Vb.GetAttributeByUniqueId(lb,Mb);if(!gb||0===gb.ptr)throw new bb(`Draco: no attribute with id ${Mb} (${wb})`);const Lb=gb.data_type();if(!Ub[Lb])throw new bb(`Draco: Cannot decode invalid data type ${Lb}`);if(gb.num_components()!==eb)throw new bb(`Draco: ${wb} decodes to ${gb.num_components()} components, its accessor declares ${eb}`);tb.push([wb,gb,Ub[Lb]])}let Cb=null;if(Ib===Mb.TRIANGULAR_MESH){const bb=4*Lb,eb=wb(Mb,bb);try{Vb.GetTrianglesUInt32Array(lb,bb,eb),Cb=new Uint32Array(Lb),Cb.set(new Uint32Array(Mb.HEAPF32.buffer,eb,Lb))}finally{Mb._free(eb)}}const Eb=[];for(const[bb,eb,Hb]of tb){const pb=eb.num_components(),gb=Ob*pb,Lb=gb*Hb.BYTES_PER_ELEMENT,Ib=wb(Mb,Lb);try{Vb.GetAttributeDataArrayForAllPoints(lb,eb,eb.data_type(),Lb,Ib),Eb.push({kind:bb,data:new Hb(Mb.HEAPF32.buffer,Ib,gb).slice(),size:pb,byteOffset:eb.byte_offset(),byteStride:eb.byte_stride(),normalized:eb.normalized()})}finally{Mb._free(Ib)}}return{indices:Cb,attributes:Eb,totalVertices:Ob}}finally{lb&&Mb.destroy(lb),gb&&Mb.destroy(gb),Vb&&Mb.destroy(Vb)}}const eb=self;let Hb=null;self.onmessage=bb=>{let{data:wb}=bb;if("init"===wb.id){try{importScripts(wb.url),Hb=DracoDecoderModule({wasmBinary:wb.wasmBinary}),eb.postMessage({id:"initDone"})}catch(Lb){eb.postMessage({id:"initError",message:Lb instanceof Error?Lb.message:String(Lb)})}return}const{seq:pb,data:Vb,attributeIds:gb,expected:lb}=wb;Hb?Hb.then((bb=>{try{const wb=Mb(bb,Vb,gb,lb),Hb=wb.attributes.map((bb=>bb.data.buffer));wb.indices&&Hb.push(wb.indices.buffer),eb.postMessage({id:"decoded",seq:pb,...wb},Hb)}catch(Lb){eb.postMessage({id:"decodeError",seq:pb,message:Lb instanceof Error?Lb.message:String(Lb)})}}),(bb=>{eb.postMessage({id:"decodeError",seq:pb,message:bb instanceof Error?bb.message:String(bb)})})):eb.postMessage({id:"decodeError",seq:pb,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, Mb.p + "dracoDecode.worker.4830841c.worker.js")
    }
    var Ub = Mb(110),
      tb = Mb(5235),
      Cb = Mb(352);
    const Eb = 2;
    const Fb = 1e3;
    let Bb = null,
      sb = null;
    const mb = [],
      hb = [];
    let zb = 0;
    const Xb = {
      decodes: 0,
      workersStarted: 0,
      mostWorkers: 0
    };
    let xb = null;

    function jb() {
      if (!Bb) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: bb,
        wasmBinaryUrl: wb
      } = Bb;
      return sb ??= (0, lb.C)(wb), sb.catch((() => {
        sb = null
      })), Xb.workersStarted++, Promise.all([sb, (0, Cb.l)()]).then((wb => {
        let [Mb] = wb;
        return new Promise(((wb, eb) => {
          const Hb = new Ob;
          Hb.onerror = bb => {
            Hb.onmessage = null, Hb.onerror = null, Hb.terminate(), eb(new Error("Draco: the decode worker failed to start" + (bb.message ? `: ${bb.message}` : " (its script did not load)")))
          }, Hb.onmessage = bb => {
            let {
              data: Mb
            } = bb;
            Hb.onmessage = null, Hb.onerror = null, "initDone" === Mb.id ? wb(Hb) : (Hb.terminate(), eb(new Error(`Draco: ${"initError"===Mb.id?Mb.message:"the worker did not start"}`)))
          };
          const pb = Mb.slice().buffer,
            Vb = {
              id: "init",
              url: bb,
              wasmBinary: pb
            };
          Hb.postMessage(Vb, [pb])
        }))
      }))
    }

    function Kb(bb) {
      const wb = mb.indexOf(bb); - 1 !== wb && mb.splice(wb, 1);
      const Mb = hb.shift();
      Mb && Rb(Mb)
    }

    function rb(bb, wb) {
      bb.busy = !0, bb.releaseTimer && (clearTimeout(bb.releaseTimer), bb.releaseTimer = null);
      bb.worker.then((Mb => {
        const eb = zb++;
        Mb.onmessage = Hb => {
          let {
            data: pb
          } = Hb;
          if (("decoded" === pb.id || "decodeError" === pb.id) && pb.seq === eb) {
            if (Mb.onmessage = null, Mb.onerror = null, "decoded" === pb.id) return Xb.decodes++, wb.resolve({
              indices: pb.indices,
              attributes: pb.attributes,
              totalVertices: pb.totalVertices
            }), void(() => {
              const wb = hb.shift();
              wb ? rb(bb, wb) : (bb.busy = !1, bb.releaseTimer = setTimeout((() => {
                const wb = mb.indexOf(bb); - 1 !== wb && mb.splice(wb, 1), bb.worker.then((bb => {
                  bb.terminate()
                }))
              }), Fb))
            })();
            Mb.terminate(), wb.reject(new Error(pb.message)), Kb(bb)
          }
        }, Mb.onerror = eb => {
          Mb.onmessage = null, Mb.onerror = null, Mb.terminate(), wb.reject(new Error(`Draco: the decode worker failed: ${eb.message}`)), Kb(bb)
        };
        const Hb = {
          id: "decode",
          seq: eb,
          data: wb.data,
          attributeIds: wb.attributeIds,
          expected: wb.expected
        };
        Mb.postMessage(Hb, [wb.data.buffer])
      }), (Mb => {
        wb.reject(Mb instanceof Error ? Mb : new Error(String(Mb))), Kb(bb)
      }))
    }

    function Rb(bb) {
      const wb = mb.find((bb => !bb.busy));
      if (wb) rb(wb, bb);
      else {
        if (xb ??= (0, tb.d)() ? 1 : function(bb, wb) {
            const Mb = bb ? Math.max(1, Math.min(Math.floor(.5 * bb), 4)) : 1;
            return wb ? Math.min(Mb, Eb) : Mb
          }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, Ub.isMobile)()), mb.length < xb) {
          const wb = {
            worker: jb(),
            busy: !0,
            releaseTimer: null
          };
          return mb.push(wb), Xb.mostWorkers = Math.max(Xb.mostWorkers, mb.length), void rb(wb, bb)
        }
        hb.push(bb)
      }
    }

    function Db(bb, wb, Mb) {
      return new Promise(((eb, Hb) => {
        Rb({
          data: new Int8Array(bb.buffer, bb.byteOffset, bb.byteLength).slice(),
          attributeIds: wb,
          expected: Mb,
          resolve: eb,
          reject: Hb
        })
      }))
    }
    var cb = Mb(38584),
      Yb = Mb(38599),
      Zb = Mb(35423),
      fb = Mb(35420);
    const Ab = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function Wb(bb) {
      const wb = (0, fb.m)(bb.byteLength);
      if (wb) throw new Zb.n(wb);
      const {
        json: Mb,
        bin: eb
      } = (0, Zb.C)(bb), Hb = (0, fb.i)(Mb, eb);
      if (Hb) throw new Zb.n(Hb);
      try {
        return function(bb, wb) {
          var Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib, Ob, Ub, tb, Cb, Eb, Fb;
          const Bb = new Map,
            sb = Mb => {
              let eb = Bb.get(Mb);
              if (!eb) {
                var Hb;
                const pb = bb.bufferViews[Mb],
                  Vb = null !== (Hb = pb.byteOffset) && void 0 !== Hb ? Hb : 0;
                eb = {
                  index: Mb,
                  bytes: wb.subarray(Vb, Vb + pb.byteLength),
                  byteStride: pb.byteStride
                }, Bb.set(Mb, eb)
              }
              return eb
            },
            mb = new Map,
            hb = wb => {
              let Mb = mb.get(wb);
              if (!Mb) {
                var eb;
                const Hb = bb.accessors[wb];
                Mb = {
                  index: wb,
                  count: Hb.count,
                  type: Hb.type,
                  numComponents: Zb.r[Hb.type],
                  componentType: Hb.componentType,
                  normalized: null !== (eb = Hb.normalized) && void 0 !== eb && eb,
                  byteOffset: Hb.byteOffset,
                  bufferView: void 0 === Hb.bufferView ? null : sb(Hb.bufferView),
                  min: Hb.min,
                  max: Hb.max
                }, mb.set(wb, Mb)
              }
              return Mb
            },
            zb = null !== (Mb = null === (eb = bb.extensionsUsed) || void 0 === eb ? void 0 : eb.includes("KHR_draco_mesh_compression")) && void 0 !== Mb && Mb,
            Xb = (null !== (Hb = bb.meshes) && void 0 !== Hb ? Hb : []).map(((wb, Mb) => {
              const eb = wb.primitives.map(((wb, Mb) => {
                var eb, Hb, pb;
                const Vb = zb ? null === (eb = wb.extensions) || void 0 === eb ? void 0 : eb.KHR_draco_mesh_compression : void 0;
                let gb = null;
                const lb = [];
                if (Vb) {
                  const Mb = {
                    vertices: bb.accessors[wb.attributes.POSITION].count,
                    indices: void 0 === wb.indices ? 0 : bb.accessors[wb.indices].count,
                    components: {}
                  };
                  gb = {
                    bufferView: sb(Vb.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: Mb
                  };
                  for (const [eb, Hb] of Zb.i) {
                    const pb = Vb.attributes[eb];
                    if (void 0 === pb) continue;
                    gb.attributeIds[Hb] = pb;
                    const lb = wb.attributes[eb];
                    var Lb;
                    if (void 0 !== lb) gb.normalized[Hb] = null !== (Lb = bb.accessors[lb].normalized) && void 0 !== Lb && Lb, Mb.components[Hb] = Zb.r[bb.accessors[lb].type]
                  }
                } else
                  for (const [bb, Ib] of Zb.i) {
                    const Mb = wb.attributes[bb];
                    void 0 !== Mb && lb.push({
                      semantic: bb,
                      kind: Ib,
                      accessor: hb(Mb)
                    })
                  }
                return {
                  index: Mb,
                  mode: null !== (Hb = wb.mode) && void 0 !== Hb ? Hb : 4,
                  attributes: lb,
                  indices: Vb || void 0 === wb.indices ? null : hb(wb.indices),
                  position: void 0 === wb.attributes.POSITION ? null : hb(wb.attributes.POSITION),
                  material: null !== (pb = wb.material) && void 0 !== pb ? pb : null,
                  draco: gb
                }
              }));
              return {
                index: Mb,
                name: wb.name,
                primitives: eb,
                extras: wb.extras
              }
            })),
            xb = (null !== (pb = bb.nodes) && void 0 !== pb ? pb : []).map(((bb, wb) => {
              var Mb, eb;
              return {
                index: wb,
                name: bb.name,
                children: null !== (Mb = bb.children) && void 0 !== Mb ? Mb : [],
                mesh: null !== (eb = bb.mesh) && void 0 !== eb ? eb : null,
                translation: bb.translation,
                rotation: bb.rotation,
                scale: bb.scale,
                hasCamera: void 0 !== bb.camera,
                extras: bb.extras
              }
            })),
            jb = null !== (Vb = null === (gb = bb.extensionsUsed) || void 0 === gb ? void 0 : gb.includes("KHR_materials_unlit")) && void 0 !== Vb && Vb,
            Kb = null !== (lb = null === (Lb = bb.extensionsUsed) || void 0 === Lb ? void 0 : Lb.includes("KHR_texture_transform")) && void 0 !== lb && lb,
            rb = (null !== (Ib = bb.materials) && void 0 !== Ib ? Ib : []).map(((bb, wb) => {
              var Mb, eb, Hb, pb;
              const Vb = bb.pbrMetallicRoughness,
                gb = null === Vb || void 0 === Vb ? void 0 : Vb.baseColorTexture;
              return {
                index: wb,
                name: bb.name,
                extras: bb.extras,
                unlit: jb && void 0 !== (null === (Mb = bb.extensions) || void 0 === Mb ? void 0 : Mb.KHR_materials_unlit),
                pbr: Vb ? {
                  baseColorFactor: Vb.baseColorFactor,
                  metallicFactor: Vb.metallicFactor,
                  roughnessFactor: Vb.roughnessFactor
                } : null,
                baseColorTexture: gb ? {
                  texture: gb.index,
                  transform: Kb && (null === (eb = gb.extensions) || void 0 === eb ? void 0 : eb.KHR_texture_transform) || null
                } : null,
                emissiveFactor: bb.emissiveFactor,
                alphaMode: null !== (Hb = bb.alphaMode) && void 0 !== Hb ? Hb : "OPAQUE",
                alphaCutoff: bb.alphaCutoff,
                doubleSided: null !== (pb = bb.doubleSided) && void 0 !== pb && pb
              }
            })),
            Rb = (null !== (Ob = bb.textures) && void 0 !== Ob ? Ob : []).map(((wb, Mb) => {
              var eb, Hb;
              const pb = void 0 === wb.sampler ? Ab : {
                index: wb.sampler,
                ...null === (eb = bb.samplers) || void 0 === eb ? void 0 : eb[wb.sampler]
              };
              return {
                index: Mb,
                sampler: {
                  index: pb.index,
                  magFilter: pb.magFilter,
                  minFilter: pb.minFilter,
                  wrapS: pb.wrapS,
                  wrapT: pb.wrapT
                },
                image: null !== (Hb = wb.source) && void 0 !== Hb ? Hb : -1
              }
            })),
            Db = (null !== (Ub = bb.images) && void 0 !== Ub ? Ub : []).map(((bb, wb) => ({
              index: wb,
              name: bb.name,
              mimeType: bb.mimeType,
              bufferView: sb(bb.bufferView)
            }))),
            cb = null !== (tb = (0, Zb.B)(bb)) && void 0 !== tb ? tb : 0;
          return {
            json: bb,
            rootNodes: null !== (Cb = null === (Eb = bb.scenes) || void 0 === Eb || null === (Fb = Eb[cb]) || void 0 === Fb ? void 0 : Fb.nodes) && void 0 !== Cb ? Cb : [],
            nodes: xb,
            meshes: Xb,
            materials: rb,
            textures: Rb,
            images: Db
          }
        }(Mb, eb)
      } catch (pb) {
        throw pb instanceof Zb.m ? pb : new Zb.m(`reading the GLB failed: ${pb instanceof Error?pb.message:String(pb)}`)
      }
    }
    async function Jb(bb, wb) {
      var Mb, eb;
      const Hb = bb.draco;
      if (!Hb) throw new Zb.m("not a Draco primitive");
      let pb;
      try {
        pb = await wb(Hb.bufferView.bytes, Hb.attributeIds, Hb.expected)
      } catch (Lb) {
        throw new Zb.m(`Draco decoding failed: ${Lb instanceof Error?Lb.message:String(Lb)}`)
      }
      const {
        vertices: Vb,
        indices: gb,
        components: lb
      } = Hb.expected;
      if (pb.totalVertices !== Vb || (null !== (Mb = null === (eb = pb.indices) || void 0 === eb ? void 0 : eb.length) && void 0 !== Mb ? Mb : 0) !== gb || pb.attributes.some((bb => bb.size !== lb[bb.kind] || bb.data.length !== Vb * bb.size))) throw new Zb.m("Draco decoding gave other counts than the accessors declare");
      for (const Ib of pb.attributes) {
        const bb = Hb.normalized[Ib.kind];
        void 0 !== bb && (Ib.normalized = bb)
      }
      return pb
    }
    const Sb = new WeakMap;

    function Nb(bb, wb) {
      var Mb;
      const eb = null !== (Mb = Sb.get(bb)) && void 0 !== Mb ? Mb : wb(bb);
      return Sb.set(bb, eb), eb
    }

    function vb(bb) {
      const wb = bb.bufferView,
        Mb = 5125 === bb.componentType ? Uint32Array : Uint16Array,
        eb = wb.bytes.buffer,
        Hb = wb.bytes.byteOffset + (bb.byteOffset || 0);
      return Hb % Mb.BYTES_PER_ELEMENT !== 0 ? new Mb(eb.slice(Hb, Hb + bb.count * Mb.BYTES_PER_ELEMENT), 0) : new Mb(eb, Hb, bb.count)
    }

    function Qb(bb, wb) {
      if (bb.min && bb.max) return [new Float64Array(bb.min), new Float64Array(bb.max)];
      const Mb = wb.find((bb => {
          let {
            kind: wb
          } = bb;
          return "position" === wb
        })),
        eb = Mb ? (0, Yb.g)(Mb, bb.count) : new Float32Array(0);
      return (0, Yb.m)(eb.length / 3, ((bb, wb) => eb[3 * bb + wb]))
    }

    function Gb(bb) {
      const wb = bb.attributes.map((bb => {
          var wb, Mb;
          let {
            kind: eb,
            accessor: Hb
          } = bb;
          const {
            bufferView: pb,
            numComponents: Vb
          } = Hb;
          if (!pb) {
            return {
              kind: eb,
              data: Nb(Hb, (() => new Float32Array(Vb * Hb.count))),
              offset: 0,
              stride: 4 * Vb,
              components: Vb,
              glType: 5126,
              isNormalized: !1
            }
          }
          const gb = null !== (wb = pb.byteStride) && void 0 !== wb ? wb : Vb * Zb.d[Hb.componentType];
          return {
            kind: eb,
            data: pb.bytes,
            offset: null !== (Mb = Hb.byteOffset) && void 0 !== Mb ? Mb : 0,
            stride: gb,
            components: Vb,
            glType: Hb.componentType,
            isNormalized: Hb.normalized
          }
        })),
        Mb = bb.indices,
        eb = Mb && Nb(Mb, vb),
        Hb = bb.position;
      return new Yb.d(wb, eb, Hb.count, ...Qb(Hb, wb))
    }
    const qb = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function ab(bb, wb) {
      const Mb = wb.attributes.map((bb => {
        let {
          kind: wb,
          data: Mb,
          size: eb,
          byteOffset: Hb,
          byteStride: pb,
          normalized: Vb
        } = bb;
        return {
          kind: wb,
          data: Mb,
          offset: Hb,
          stride: pb,
          components: eb,
          glType: 5120 + qb.indexOf(Mb.constructor),
          isNormalized: Vb
        }
      }));
      return new Yb.d(Mb, wb.indices, wb.totalVertices, ...Qb(bb.position, Mb))
    }

    function ib(bb) {
      const wb = bb.lastIndexOf("/");
      return wb < 0 ? bb : bb.substring(wb + 1)
    }

    function ub(bb) {
      const wb = bb.lastIndexOf("/");
      return wb < 0 ? "" : bb.substring(0, wb + 1)
    }

    function db(bb) {
      return bb.name || `node${bb.index}`
    }
    const Pb = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      nb = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      yb = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function ob(bb) {
      var wb, Mb, eb, Hb;
      const pb = null !== (wb = bb.minFilter) && void 0 !== wb ? wb : 9987;
      return 9729 === (null !== (Mb = bb.magFilter) && void 0 !== Mb ? Mb : 9729) ? null !== (eb = nb[pb]) && void 0 !== eb ? eb : 3 : null !== (Hb = yb[pb]) && void 0 !== Hb ? Hb : 4
    }
    const Tb = {
      33071: 0,
      33648: 2
    };

    function kb(bb) {
      var wb;
      return null !== (wb = Tb[null !== bb && void 0 !== bb ? bb : 10497]) && void 0 !== wb ? wb : 1
    }

    function bw(bb) {
      return 9728 === bb.minFilter || 9729 === bb.minFilter
    }

    function ww(bb) {
      var wb, Mb, eb;
      const Hb = Float64Array.from(null !== (wb = bb.scale) && void 0 !== wb ? wb : [1, 1, 1]);
      return bb.hasCamera && (Hb[0] = -1), {
        translation: Float64Array.from(null !== (Mb = bb.translation) && void 0 !== Mb ? Mb : [0, 0, 0]),
        rotation: Float64Array.from(null !== (eb = bb.rotation) && void 0 !== eb ? eb : [0, 0, 0, 1]),
        scale: Hb
      }
    }

    function Mw(bb, wb) {
      let {
        translation: Mb,
        rotation: eb,
        scale: Hb
      } = bb;
      const pb = new Float32Array(16);
      return (0, cb.e)(Hb, 0, eb, 0, Mb, 0, pb), wb && (0, cb.t)(pb, wb, 0, pb), pb
    }
    class ew {
      constructor(bb, wb, Mb, eb) {
        this.model = bb, this.decode = wb, this.fileInfo = Mb, this.uniqueRootUrl = eb, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const Hb = new Set,
          pb = (wb, Mb) => {
            const eb = bb.nodes[wb];
            if (this.parents.has(eb)) throw new Zb.m(`/nodes/${wb}: Invalid recursive node hierarchy`);
            this.parents.set(eb, Mb);
            const Vb = null === eb.mesh ? [] : bb.meshes[eb.mesh].primitives,
              gb = Vb.map((bb => {
                const wb = Vb.length > 1;
                return {
                  name: wb ? `${db(eb)}_primitive${bb.index}` : db(eb),
                  node: eb,
                  primitive: bb,
                  part: wb,
                  geometry: null
                }
              }));
            this.uses.set(eb, gb);
            const lb = null !== eb.mesh && Hb.has(eb.mesh);
            Hb.add(eb.mesh), this.own.set(eb, lb ? [] : gb);
            for (const bb of eb.children) pb(bb, eb)
          };
        for (const Vb of bb.rootNodes) pb(Vb, null);
        this.primitives = bb.nodes.flatMap((bb => {
          var wb;
          return null !== (wb = this.own.get(bb)) && void 0 !== wb ? wb : []
        }))
      }
      decodeGeometries() {
        const bb = new Map;
        return Promise.all(this.primitives.map((async wb => {
          const {
            primitive: Mb
          } = wb, eb = Mb.draco;
          let Hb = eb ? bb.get(eb.bufferView.index) : Promise.resolve(Gb(Mb));
          Hb || (Hb = Jb(Mb, this.decode).then((bb => ab(Mb, bb))), bb.set(eb.bufferView.index, Hb)), wb.geometry = await Hb
        })))
      }
      parentOf(bb) {
        var wb;
        return null !== (wb = this.parents.get(bb)) && void 0 !== wb ? wb : null
      }
      meshesUnder(bb) {
        const wb = this.model.nodes.filter((bb => this.uses.has(bb)));
        for (const eb of wb) {
          const wb = this.uses.get(eb),
            Mb = wb.find((wb => wb.name === bb));
          if (Mb) return 1 === wb.length ? this.subtree(eb) : this.own.get(eb).includes(Mb) ? [Mb] : []
        }
        const Mb = wb.find((wb => 1 !== this.uses.get(wb).length && db(wb) === bb));
        return Mb ? this.subtree(Mb) : null
      }
      subtree(bb) {
        return [...this.own.get(bb), ...bb.children.flatMap((bb => this.subtree(this.model.nodes[bb])))]
      }
      worldMatrix(bb, wb, Mb) {
        let eb = Mw(ww(wb ? Pb : {}), null);
        const Hb = [];
        for (let Vb = bb.part ? bb.node : this.parentOf(bb.node); Vb; Vb = this.parentOf(Vb)) Hb.unshift(Vb);
        for (const Vb of Hb) eb = Mw(ww(Vb), eb);
        const pb = ww(bb.part ? {} : bb.node);
        return void 0 !== Mb && pb.scale.fill(Mb), Mw(pb, eb)
      }
      floats(bb) {
        const {
          vertexAttributes: wb,
          vertexCount: Mb
        } = bb.geometry;
        return new Map(wb.map((bb => [bb.kind, (0, Yb.g)(bb, Mb)])))
      }
      imageUrl(bb) {
        return function(bb, wb, Mb) {
          let {
            name: eb
          } = wb;
          return `data:${bb}${eb}#image${Mb}`
        }(this.uniqueRootUrl, this.fileInfo, bb)
      }
      textureDesc(bb, wb) {
        var Mb;
        let {
          texture: eb,
          transform: Hb
        } = bb;
        const {
          sampler: pb,
          image: Vb
        } = this.model.textures[eb], {
          bufferView: gb,
          mimeType: lb,
          name: Lb
        } = this.model.images[Vb], Ib = Hb && {
          ...Hb.offset ? {
            uOffset: Hb.offset[0],
            vOffset: Hb.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...Hb.rotation ? {
            wAng: -Hb.rotation
          } : {},
          ...Hb.scale ? {
            uScale: Hb.scale[0],
            vScale: Hb.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(Vb),
          noMipmap: bw(pb),
          invertY: !1,
          samplingMode: ob(pb),
          data: {
            bytes: gb.bytes,
            mimeType: lb,
            label: Lb,
            context: `/textures/${eb}`
          },
          sets: {
            wrapU: kb(pb.wrapS),
            wrapV: kb(pb.wrapT),
            ...Ib,
            coordinatesIndex: null !== (Mb = null === Hb || void 0 === Hb ? void 0 : Hb.texCoord) && void 0 !== Mb ? Mb : 0,
            hasAlpha: wb
          }
        }
      }
    }
    async function Hw(bb, wb, Mb, eb, Hb, pb) {
      let Vb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const gb = function(bb, wb, Mb) {
          return "string" !== typeof wb ? {
            url: "",
            rootUrl: bb,
            name: Mb()
          } : wb ? wb.startsWith("data:") ? {
            url: wb,
            rootUrl: bb,
            name: ""
          } : bb ? {
            url: bb + wb,
            rootUrl: bb,
            name: wb
          } : {
            url: wb,
            rootUrl: ub(wb),
            name: ib(wb)
          } : {
            url: bb,
            rootUrl: ub(bb),
            name: ib(bb)
          }
        }(Mb, bb, Hb),
        lb = {};
      wb.addPendingData(lb);
      try {
        const Mb = Wb(await async function(bb, wb) {
            return "string" !== typeof wb ? wb : bb.url.startsWith("data:") ? (0, Zb.u)(bb.url) : await (0, Zb.y)(bb.url)
          }(gb, bb)),
          lb = new ew(Mb, eb, gb, function(bb, wb) {
            let {
              rootUrl: Mb,
              name: eb
            } = bb;
            return !Mb.startsWith("file:") && eb ? Mb : `${Mb}${wb()}/`
          }(gb, Hb));
        return await pb(lb), wb.importedMeshesFiles && (wb.loadingPluginName = "dW", Vb && wb.importedMeshesFiles.push(gb.url)), lb
      } finally {
        wb.removePendingData(lb)
      }
    }
    var pw = Mb(38714),
      Vw = Mb(38563),
      gw = Mb(39127);

    function lw(bb) {
      if (null === bb || void 0 === bb || !bb.min || !bb.max) return null;
      const [wb, Mb, eb] = bb.min, [Hb, pb, Vb] = bb.max, {
        BoundingInfo: gb,
        YC: lb
      } = (0, pw.b)();
      return new gb(new lb(wb, Mb, eb), new lb(Hb, pb, Vb))
    }

    function Lw(bb) {
      (0, Vw.e)(bb) || (bb.geometry && bb.geometry.useBoundingInfoFromGeometry ? bb._updateBoundingInfo() : bb.refreshBoundingInfo(!0, !0))
    }
    class Iw {
      constructor(bb, wb) {
        this.JE = bb, this.decode = wb, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(bb) {
        let wb = this.viewData.get(bb.index);
        return wb || (wb = this.bufferData.then((() => bb.bytes)), this.viewData.set(bb.index, wb)), wb
      }
      viewBuffer(bb) {
        let wb = this.viewBuffers.get(bb.index);
        return wb || (wb = this.viewBytes(bb).then((bb => new((0, pw.b)().uI)(this.JE.DC(), bb, !1))), this.viewBuffers.set(bb.index, wb)), wb
      }
      vertexBuffer(bb, wb) {
        const {
          kind: Mb,
          data: eb
        } = wb, Hb = `${bb.index}:${Mb}`;
        let pb = this.vertexBuffers.get(Hb);
        if (!pb) {
          const Vb = bb.bufferView;
          pb = Vb ? this.viewBuffer(Vb).then((bb => this.layoutVertexBuffer(bb, wb))) : Promise.resolve(eb).then((bb => new((0, pw.b)().VertexBuffer)(this.JE.DC(), bb, Mb, !1))), this.vertexBuffers.set(Hb, pb)
        }
        return pb
      }
      layoutVertexBuffer(bb, wb) {
        let {
          kind: Mb,
          offset: eb,
          stride: Hb,
          components: pb,
          glType: Vb,
          isNormalized: gb
        } = wb;
        const lb = this.JE.DC();
        return new((0, pw.b)().VertexBuffer)(lb, bb, Mb, !1, void 0, Hb, void 0, eb, pb, Vb, gb, !0, void 0, !0)
      }
      load(bb, wb, Mb) {
        const eb = (0, Vw.e)(Mb),
          Hb = bb => {
            eb || (Mb._delayInfo = Mb._delayInfo || [], -1 === Mb._delayInfo.indexOf(bb) && Mb._delayInfo.push(bb))
          },
          pb = wb.draco;
        if (pb) {
          for (const bb in pb.attributeIds) Hb(bb);
          let Vb = this.dracoGeometry.get(pb.bufferView.index);
          return Vb || (Vb = this.viewBytes(pb.bufferView).then((async () => {
            let Hb;
            try {
              Hb = await Jb(wb, this.decode)
            } catch (lb) {
              throw new Zb.m(`${bb}: ${lb instanceof Error?lb.message:String(lb)}`)
            }
            const pb = ab(wb, Hb);
            if (eb) return pb;
            const Vb = lw(wb.position),
              gb = new((0, pw.b)().MirroredGeometry)(Mb.name, this.JE);
            Vb && (gb._boundingInfo = Vb, gb.useBoundingInfoFromGeometry = !0), pb.indexData && gb.setIndices(pb.indexData);
            for (const bb of pb.vertexAttributes) gb.setVerticesBuffer(this.layoutVertexBuffer(bb.data, bb), pb.vertexCount);
            return gb.link(pb), gb
          })), this.dracoGeometry.set(pb.bufferView.index, Vb)), Vb
        }
        const Vb = [],
          gb = Gb(wb);
        if (eb) return Mb.isUnIndexed = !gb.indexData, Mb.hasVertexAlpha = (0, gw.g)(wb), Promise.resolve(gb);
        const lb = new((0, pw.b)().MirroredGeometry)(Mb.name, this.JE),
          {
            indexData: Lb
          } = gb;
        Lb ? Vb.push(this.viewBytes(wb.indices.bufferView).then((() => {
          lb.setIndices(Lb)
        }))) : Mb.isUnIndexed = !0;
        for (const [Ib, {
            kind: Ob,
            accessor: Ub
          }] of wb.attributes.entries()) Hb(Ob), Vb.push(this.vertexBuffer(Ub, gb.vertexAttributes[Ib]).then((bb => {
          if ("position" === bb.getKind()) {
            const bb = lw(Ub);
            bb && (lb._boundingInfo = bb, lb.useBoundingInfoFromGeometry = !0)
          }
          lb.setVerticesBuffer(bb, gb.vertexCount)
        })));
        return (0, gw.g)(wb) && (Mb.hasVertexAlpha = !0), Promise.all(Vb).then((() => (lb.link(gb), lb)))
      }
    }
    var Ow, Uw = Mb(38501),
      tw = Mb(38281),
      Cw = Mb(39139),
      Ew = Mb(38397),
      Fw = Mb(38473),
      Bw = Mb(2451),
      sw = Mb(38440);

    function mw(bb, wb) {
      bb.metadata = bb.metadata || {};
      const Mb = bb._internalMetadata = bb._internalMetadata || {},
        eb = Mb.dW = Mb.dW || {};
      (eb.pointers = eb.pointers || []).push(wb)
    }

    function hw(bb, wb) {
      if (wb && Object.keys(wb).length > 0) {
        const Mb = bb.metadata = bb.metadata || {};
        (Mb.dW = Mb.dW || {}).extras = wb
      }
    }

    function zw(bb, wb) {
      wb.position = bb.translation ? tw.YC.FromArray(bb.translation) : tw.YC.Zero(), wb.rotationQuaternion = bb.rotation ? tw.Quaternion.FromArray(bb.rotation) : tw.Quaternion.Identity(), wb.CO = bb.scale ? tw.YC.FromArray(bb.scale) : tw.YC.One()
    }
    class Xw {
      constructor(bb, wb) {
        if (this.JE = bb, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, wb) {
          const wb = bb.DC(),
            Mb = bb.vJ.add((() => {
              this.dispose()
            })),
            eb = wb.RC.add((() => {
              for (const bb of [...this.geometries, ...this.meshes, ...this.textures]) bb._rebuild()
            }));
          this.release = () => {
            bb.vJ.remove(Mb), wb.RC.remove(eb)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const bb of this.meshes) this.JE.lpb(bb);
          for (const bb of this.materials) this.JE.addMaterial(bb);
          for (const bb of this.geometries) this.JE.addGeometry(bb);
          for (const bb of this.transformNodes) this.JE.addTransformNode(bb);
          for (const bb of this.textures) this.JE.addTexture(bb)
        }
      }
      dispose() {
        var bb;
        for (const wb of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const bb of wb.slice()) bb.dispose();
          wb.length = 0
        }
        null === (bb = this.release) || void 0 === bb || bb.call(this), this.release = null
      }
    }
    class xw {
      constructor(bb, wb, Mb, eb, Hb, pb, Vb) {
        this.asset = bb, this.JE = wb, this.tree = Mb, this.geometryData = Hb, this.materials = pb, this.lite = Vb, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = eb ? Mb : null
      }
      create(bb) {
        if (this.lite) return bb();
        const wb = this.JE;
        wb._blockEntityCollection = !!this.container;
        try {
          const wb = bb();
          return this.container && (wb._parentContainer = this.container), wb
        } finally {
          wb._blockEntityCollection = !1
        }
      }
      node(bb, wb) {
        return this.create((() => this.lite ? wb ? (0, Cw.i)(this.lite, bb) : (0, Cw.r)(this.lite, bb) : wb ? new((0, pw.b)().Mesh)(bb, this.JE) : new((0, pw.b)().TransformNode)(bb, this.JE)))
      }
      async load() {
        var bb;
        this.asset.model.json.nodes && this.createRoot();
        const wb = this.lite ? null : this.JE,
          Mb = null !== (bb = null === wb || void 0 === wb ? void 0 : wb.blockMaterialDirtyMechanism) && void 0 !== bb && bb;
        let eb;
        wb && (wb.blockMaterialDirtyMechanism = !0);
        try {
          eb = this.loadScene()
        } finally {
          null === wb || void 0 === wb || wb._forceBlockMaterialDirtyMechanism(Mb)
        }
        await eb;
        const {
          root: Hb,
          tree: pb
        } = this;
        Hb && (Hb.Bx(!0), pb.meshes.push(Hb), pb.rootNodes.push(Hb));
        for (const gb of this.asset.model.nodes) {
          const bb = this.nodeObjects.get(gb.index);
          bb && ["TransformNode", "LiteNode"].includes(bb.getClassName()) && pb.transformNodes.push(bb);
          for (const wb of null !== (Vb = this.nodePrimitives.get(gb.index)) && void 0 !== Vb ? Vb : []) {
            var Vb;
            pb.meshes.push(wb);
            const bb = wb.geometry;
            bb && !pb.geometries.includes(bb) && pb.geometries.push(bb)
          }
        }
      }
      createRoot() {
        const bb = this.node("__root__", !0);
        this.root = bb, bb.Bx(!1), this.JE.useRightHandedSystem || zw(Pb, bb)
      }
      loadScene() {
        const bb = [];
        for (const wb of this.asset.model.rootNodes) bb.push(this.loadNode(this.asset.model.nodes[wb], (bb => {
          bb.parent = this.root
        })));
        return bb.push(Promise.resolve()), Promise.all(bb).then((() => {}))
      }
      loadNode(bb, wb) {
        const Mb = `/nodes/${bb.index}`,
          eb = [],
          Hb = Hb => {
            if (mw(Hb, Mb), zw(bb, Hb), bb.hasCamera && !this.JE.useRightHandedSystem) {
              const {
                CO: bb
              } = Hb;
              bb.set(-1, bb.y, bb.z)
            }
            for (const wb of bb.children) eb.push(this.loadNode(this.asset.model.nodes[wb], (bb => {
              bb.parent = Hb
            })));
            (Mb => {
              hw(Mb, bb.extras), wb(Mb)
            })(Hb)
          };
        if (null === bb.mesh) {
          const wb = this.node(db(bb), !1);
          this.nodeObjects.set(bb.index, wb), Hb(wb)
        } else {
          const wb = this.asset.model.meshes[bb.mesh];
          eb.push(this.loadMesh(`/meshes/${wb.index}`, bb, wb, Hb))
        }
        return Promise.all(eb).then((() => {
          for (const Mb of null !== (wb = this.nodePrimitives.get(bb.index)) && void 0 !== wb ? wb : []) {
            var wb;
            Lw(Mb)
          }
          return this.nodeObjects.get(bb.index)
        }))
      }
      loadMesh(bb, wb, Mb, eb) {
        const Hb = [],
          pb = db(wb);
        if (1 === Mb.primitives.length) {
          const eb = Mb.primitives[0];
          Hb.push(this.loadPrimitive(`${bb}/primitives/${eb.index}`, pb, eb, (bb => {
            this.nodeObjects.set(wb.index, bb), this.nodePrimitives.set(wb.index, [bb])
          })))
        } else {
          const eb = this.node(pb, !1);
          this.nodeObjects.set(wb.index, eb);
          const Vb = [];
          this.nodePrimitives.set(wb.index, Vb);
          for (const wb of Mb.primitives) Hb.push(this.loadPrimitive(`${bb}/primitives/${wb.index}`, `${pb}_primitive${wb.index}`, wb, (bb => {
            bb.parent = eb, Vb.push(bb)
          })))
        }
        const Vb = this.nodeObjects.get(wb.index);
        return eb(Vb), Promise.all(Hb).then((() => Vb))
      }
      loadPrimitive(bb, wb, Mb, eb) {
        const Hb = [],
          pb = this.node(wb, !0);
        if (pb.sideOrientation = this.JE.useRightHandedSystem ? Ew.c.CounterClockWiseSideOrientation : Ew.c.ClockWiseSideOrientation, Hb.push(this.geometryData.load(bb, Mb, pb).then((bb => {
            if ((0, Vw.e)(pb)) {
              var wb, Mb;
              const eb = bb;
              pb.replaceModel(eb, Int32Array.of(0, null !== (wb = null === (Mb = eb.indexData) || void 0 === Mb ? void 0 : Mb.length) && void 0 !== wb ? wb : eb.vertexCount, 0, eb.vertexCount))
            } else this.create((() => (bb.applyToMesh(pb), bb)))
          }))), this.materials) {
          const bb = 0 === Mb.mode ? Ew.c.PointListDrawMode : Ew.c.TriangleFillMode,
            wb = null === Mb.material ? null : this.asset.model.materials[Mb.material];
          Hb.push(this.loadMaterial(wb, bb, (bb => {
            pb.material = bb
          })))
        }
        return mw(pb, bb), eb(pb), Promise.all(Hb).then((() => pb))
      }
      loadMaterial(bb, wb, Mb) {
        var eb;
        const Hb = `${null!==(eb=null===bb||void 0===bb?void 0:bb.index)&&void 0!==eb?eb:"default"}:${wb}`;
        let pb = this.materialData.get(Hb);
        return pb || (pb = this.createMaterial(bb, wb), this.materialData.set(Hb, pb)), Mb(pb.material), pb.promise
      }
      createMaterial(bb, wb) {
        const Mb = bb ? bb.name || `material${bb.index}` : "__GLTFLoader._default",
          {
            style: eb,
            unlit: Hb
          } = this.materials;
        let pb;
        const Vb = this.create((() => {
          const Vb = (0, sw.d)({
            name: Mb,
            JE: this.JE,
            sets: {
              ...(0, gw.e)(this.asset, bb, eb, Hb),
              fillMode: wb
            },
            unrendered: !0
          });
          return pb = Vb.model, Vb.mirror
        }));
        let gb = Promise.resolve();
        if (bb) {
          const wb = `/materials/${bb.index}`,
            eb = pb.diffuseTexture;
          if (eb && !eb.mirror) gb = new Promise((bb => setTimeout(bb)));
          else if (eb) {
            const Hb = eb.mirror;
            Hb._parentContainer = this.container, Hb.name = `${Mb} (Base Color)`, mw(Hb, `${wb}${bb.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(Hb), gb = (0, Fw.v)(eb)
          }
          hw(Vb, bb.extras), mw(Vb, wb)
        }
        return this.tree.materials.push(Vb), {
          material: Vb,
          promise: gb
        }
      }
    }

    function jw() {
      Uw.i.dracoDecodes = Xb.decodes, Uw.i.dracoWorkersStarted = Xb.workersStarted, Uw.i.dracoMostWorkers = Xb.mostWorkers
    }
    async function Kw(bb, wb, Mb, Hb, pb) {
      try {
        return await async function(bb, wb, Mb, Hb, pb, Vb) {
          var gb;
          let lb;
          const Lb = null === (gb = (0, Bw.h)()) || void 0 === gb ? void 0 : gb.FO,
            Ib = null !== Lb && void 0 !== Lb && Lb.oC && wb === Lb.RJ() ? Lb : null,
            Ob = pb && !Ib;
          return await Hw(bb, wb, Mb, Hb, eb.c, (bb => (lb = new Xw(wb, Ob), new xw(bb, wb, lb, Ob, new Iw(wb, Hb), Vb, Ib).load())), !pb), lb
        }(bb, wb, Mb, Db, Hb, pb)
      } finally {
        jw()
      }
    }
    async function rw(bb, wb, Mb, Hb) {
      try {
        return await Hw(bb, wb, Mb, Db, eb.c, (bb => Hb(bb, new Iw(wb, Db))))
      } finally {
        jw()
      }
    }
    Ow = gb, Bb || (Bb = {
      scriptUrl: new URL(Ow.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(Ow.wasmBinaryUrl, location.href).href
    })
  },
  37394: bb => {
    bb.exports = function(bb, wb, Mb, eb) {
      var Hb = self || window;
      try {
        try {
          var pb;
          try {
            pb = new Hb.Blob([bb])
          } catch (Lb) {
            (pb = new(Hb.BlobBuilder || Hb.WebKitBlobBuilder || Hb.MozBlobBuilder || Hb.MSBlobBuilder)).append(bb), pb = pb.getBlob()
          }
          var Vb = Hb.URL || Hb.webkitURL,
            gb = Vb.createObjectURL(pb),
            lb = new Hb[wb](gb, Mb);
          return Vb.revokeObjectURL(gb), lb
        } catch (Lb) {
          return new Hb[wb]("data:application/javascript,".concat(encodeURIComponent(bb)), Mb)
        }
      } catch (Lb) {
        if (!eb) throw Error("Inline worker is not supported");
        return new Hb[wb](eb, Mb)
      }
    }
  },
  53710: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  53719: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);