export const id = 203;
export const ids = [203];
export const modules = {
  40910: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      loadGlbAsset: () => Nc,
      loadGlbTree: () => Cc
    });
    var kb = sb(37501),
      Wb = sb(40919),
      ab = sb(35924),
      Tb = sb.n(ab);

    function Ub() {
      return Tb()('(()=>{class bb extends Error{}function cb(cb,sb){const kb=cb._malloc(sb);if(0===kb)throw new bb(`Draco: the decoder\'s heap refused ${sb} bytes`);return kb}function sb(bb){return{[bb.DT_FLOAT32]:[Float32Array,5126],[bb.DT_INT8]:[Int8Array,5120],[bb.DT_INT16]:[Int16Array,5122],[bb.DT_INT32]:[Int32Array,5124],[bb.DT_UINT8]:[Uint8Array,5121],[bb.DT_UINT16]:[Uint16Array,5123],[bb.DT_UINT32]:[Uint32Array,5125]}}function kb(cb,kb,Wb,ab,Tb){let Ub=null,Ib=null,Hb=null;try{Ub=new cb.Decoder,Ib=new cb.DecoderBuffer,Ib.Init(kb,kb.byteLength);let fb=0;const Mb=Ub.GetEncodedGeometryType(Ib);if(Mb===cb.TRIANGULAR_MESH){const sb=new cb.Mesh;Hb=sb;const kb=Ub.DecodeBufferToMesh(Ib,sb);if(!kb.ok()||0===sb.ptr)throw new bb(kb.error_msg());fb=3*sb.num_faces()}else{if(Mb!==cb.POINT_CLOUD)throw new bb(`Draco: Cannot decode invalid geometry type ${Mb}`);{const sb=new cb.PointCloud;Hb=sb;const kb=Ub.DecodeBufferToPointCloud(Ib,sb);if(!kb.ok()||!sb.ptr)throw new bb(kb.error_msg())}}const Xb=Hb.num_points();if(Xb!==ab.vertices||fb!==ab.indices)throw new bb(`Draco: decoded ${Xb} vertices and ${fb} indices, the accessors declare ${ab.vertices} and ${ab.indices}`);const nb=sb(cb),mb=[];for(const{kind:cb,id:sb,components:kb}of Wb){const Wb=Ub.GetAttributeByUniqueId(Hb,sb);if(!Wb||0===Wb.ptr)throw new bb(`Draco: no attribute with id ${sb} (${cb})`);const ab=Wb.data_type();if(!nb[ab])throw new bb(`Draco: Cannot decode invalid data type ${ab}`);if(Wb.num_components()!==kb)throw new bb(`Draco: ${cb} decodes to ${Wb.num_components()} components, its accessor declares ${kb}`);mb.push([cb,Wb,ab])}return Tb({dracoDecoder:Ub,geometry:Hb,triangles:Mb===cb.TRIANGULAR_MESH,numPoints:Xb,numIndices:fb,attributes:mb})}finally{Hb&&cb.destroy(Hb),Ib&&cb.destroy(Ib),Ub&&cb.destroy(Ub)}}const Wb=self;let ab=null;self.onmessage=bb=>{let{data:Tb}=bb;if("init"===Tb.id){try{importScripts(Tb.url),ab=DracoDecoderModule({wasmBinary:Tb.wasmBinary}),Wb.postMessage({id:"initDone"})}catch(Mb){Wb.postMessage({id:"initError",message:Mb instanceof Error?Mb.message:String(Mb)})}return}const{seq:Ub,data:Ib,attributeIds:Hb,expected:fb}=Tb;ab?ab.then((bb=>{try{const ab=function(bb,Wb,ab,Tb){const Ub=Object.keys(ab).map((bb=>({kind:bb,id:ab[bb],components:Tb.components[bb]})));return kb(bb,Wb,Ub,Tb,(kb=>{let{dracoDecoder:Wb,geometry:ab,triangles:Tb,numPoints:Ub,numIndices:Ib,attributes:Hb}=kb;const fb=sb(bb);let Mb=null;if(Tb){const sb=4*Ib,kb=cb(bb,sb);try{Wb.GetTrianglesUInt32Array(ab,sb,kb),Mb=new Uint32Array(Ib),Mb.set(new Uint32Array(bb.HEAPF32.buffer,kb,Ib))}finally{bb._free(kb)}}const Xb=[];for(const[sb,nb,mb]of Hb){const[kb]=fb[mb],Tb=nb.num_components(),Ib=Ub*Tb,Hb=Ib*kb.BYTES_PER_ELEMENT,Mb=cb(bb,Hb);try{Wb.GetAttributeDataArrayForAllPoints(ab,nb,mb,Hb,Mb),Xb.push({kind:sb,data:new kb(bb.HEAPF32.buffer,Mb,Ib).slice(),size:Tb,byteOffset:nb.byte_offset(),byteStride:nb.byte_stride(),normalized:nb.normalized()})}finally{bb._free(Mb)}}return{indices:Mb,attributes:Xb,totalVertices:Ub}}))}(bb,Ib,Hb,fb),Tb=ab.attributes.map((bb=>bb.data.buffer));ab.indices&&Tb.push(ab.indices.buffer),Wb.postMessage({id:"decoded",seq:Ub,...ab},Tb)}catch(Mb){Wb.postMessage({id:"decodeError",seq:Ub,message:Mb instanceof Error?Mb.message:String(Mb)})}}),(bb=>{Wb.postMessage({id:"decodeError",seq:Ub,message:bb instanceof Error?bb.message:String(bb)})})):Wb.postMessage({id:"decodeError",seq:Ub,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, sb.p + "dracoDecode.worker.7326e0c8.worker.js")
    }
    var Ib = sb(117);
    const Hb = 1e3;
    let fb = null,
      Mb = null;
    const Xb = [],
      nb = [];
    let mb = 0;
    const lb = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      Qb = function(bb, cb) {
        const sb = bb ? Math.max(1, Math.min(Math.floor(.5 * bb), 4)) : 1;
        return cb ? Math.min(sb, 2) : sb
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, Ib.isMobile)());

    function eb() {
      if (!fb) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: bb,
        wasmBinaryUrl: cb
      } = fb;
      return Mb ??= fetch(cb).then((bb => {
        if (!bb.ok) throw new Error(`Draco: fetching ${cb} failed: ${bb.status}`);
        return bb.arrayBuffer()
      })), Mb.catch((() => {
        Mb = null
      })), lb.workersStarted++, Mb.then((cb => new Promise(((sb, kb) => {
        const Wb = new Ub;
        Wb.onerror = bb => {
          Wb.onmessage = null, Wb.onerror = null, Wb.terminate(), kb(new Error("Draco: the decode worker failed to start" + (bb.message ? `: ${bb.message}` : " (its script did not load)")))
        }, Wb.onmessage = bb => {
          let {
            data: cb
          } = bb;
          Wb.onmessage = null, Wb.onerror = null, "initDone" === cb.id ? sb(Wb) : (Wb.terminate(), kb(new Error(`Draco: ${"initError"===cb.id?cb.message:"the worker did not start"}`)))
        };
        const ab = cb.slice(0),
          Tb = {
            id: "init",
            url: bb,
            wasmBinary: ab
          };
        Wb.postMessage(Tb, [ab])
      }))))
    }

    function Cb(bb) {
      const cb = Xb.indexOf(bb); - 1 !== cb && Xb.splice(cb, 1);
      const sb = nb.shift();
      sb && Vb(sb)
    }

    function Nb(bb, cb) {
      bb.busy = !0, bb.releaseTimer && (clearTimeout(bb.releaseTimer), bb.releaseTimer = null);
      bb.worker.then((sb => {
        const kb = mb++;
        sb.onmessage = Wb => {
          let {
            data: ab
          } = Wb;
          if (("decoded" === ab.id || "decodeError" === ab.id) && ab.seq === kb) {
            if (sb.onmessage = null, sb.onerror = null, "decoded" === ab.id) return lb.decodes++, cb.resolve({
              indices: ab.indices,
              attributes: ab.attributes,
              totalVertices: ab.totalVertices
            }), void(() => {
              const cb = nb.shift();
              cb ? Nb(bb, cb) : (bb.busy = !1, bb.releaseTimer = setTimeout((() => {
                const cb = Xb.indexOf(bb); - 1 !== cb && Xb.splice(cb, 1), bb.worker.then((bb => {
                  bb.terminate()
                }))
              }), Hb))
            })();
            sb.terminate(), cb.reject(new Error(ab.message)), Cb(bb)
          }
        }, sb.onerror = kb => {
          sb.onmessage = null, sb.onerror = null, sb.terminate(), cb.reject(new Error(`Draco: the decode worker failed: ${kb.message}`)), Cb(bb)
        };
        const Wb = {
          id: "decode",
          seq: kb,
          data: cb.data,
          attributeIds: cb.attributeIds,
          expected: cb.expected
        };
        sb.postMessage(Wb, [cb.data.buffer])
      }), (sb => {
        cb.reject(sb instanceof Error ? sb : new Error(String(sb))), Cb(bb)
      }))
    }

    function Vb(bb) {
      const cb = Xb.find((bb => !bb.busy));
      if (cb) Nb(cb, bb);
      else {
        if (Xb.length < Qb) {
          const cb = {
            worker: eb(),
            busy: !0,
            releaseTimer: null
          };
          return Xb.push(cb), lb.mostWorkers = Math.max(lb.mostWorkers, Xb.length), void Nb(cb, bb)
        }
        nb.push(bb)
      }
    }

    function Lb(bb, cb, sb) {
      return new Promise(((kb, Wb) => {
        Vb({
          data: new Int8Array(bb.buffer, bb.byteOffset, bb.byteLength).slice(),
          attributeIds: cb,
          expected: sb,
          resolve: kb,
          reject: Wb
        })
      }))
    }
    var ub = sb(37021),
      Yb = sb(37029),
      hb = sb(8999),
      Jb = sb(8995);
    const gb = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function Bb(bb) {
      const cb = (0, Jb.g)(bb.byteLength);
      if (cb) throw new hb.n(cb);
      const {
        json: sb,
        bin: kb
      } = (0, hb.z)(bb), Wb = (0, Jb.e)(sb, kb);
      if (Wb) throw new hb.n(Wb);
      try {
        return function(bb, cb) {
          var sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb, Mb, Xb, nb, mb, lb, Qb;
          const eb = new Map,
            Cb = sb => {
              let kb = eb.get(sb);
              if (!kb) {
                var Wb;
                const ab = bb.bufferViews[sb],
                  Tb = null !== (Wb = ab.byteOffset) && void 0 !== Wb ? Wb : 0;
                kb = {
                  index: sb,
                  bytes: cb.subarray(Tb, Tb + ab.byteLength),
                  byteStride: ab.byteStride
                }, eb.set(sb, kb)
              }
              return kb
            },
            Nb = new Map,
            Vb = cb => {
              let sb = Nb.get(cb);
              if (!sb) {
                var kb;
                const Wb = bb.accessors[cb];
                sb = {
                  index: cb,
                  count: Wb.count,
                  type: Wb.type,
                  numComponents: hb.r[Wb.type],
                  componentType: Wb.componentType,
                  normalized: null !== (kb = Wb.normalized) && void 0 !== kb && kb,
                  byteOffset: Wb.byteOffset,
                  bufferView: void 0 === Wb.bufferView ? null : Cb(Wb.bufferView),
                  min: Wb.min,
                  max: Wb.max
                }, Nb.set(cb, sb)
              }
              return sb
            },
            Lb = null !== (sb = null === (kb = bb.extensionsUsed) || void 0 === kb ? void 0 : kb.includes("KHR_draco_mesh_compression")) && void 0 !== sb && sb,
            ub = (null !== (Wb = bb.meshes) && void 0 !== Wb ? Wb : []).map(((cb, sb) => {
              const kb = cb.primitives.map(((cb, sb) => {
                var kb, Wb, ab;
                const Tb = Lb ? null === (kb = cb.extensions) || void 0 === kb ? void 0 : kb.KHR_draco_mesh_compression : void 0;
                let Ub = null;
                const Ib = [];
                if (Tb) {
                  const sb = {
                    vertices: bb.accessors[cb.attributes.POSITION].count,
                    indices: void 0 === cb.indices ? 0 : bb.accessors[cb.indices].count,
                    components: {}
                  };
                  Ub = {
                    bufferView: Cb(Tb.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: sb
                  };
                  for (const [kb, Wb] of hb.j) {
                    const ab = Tb.attributes[kb];
                    if (void 0 === ab) continue;
                    Ub.attributeIds[Wb] = ab;
                    const Ib = cb.attributes[kb];
                    var Hb;
                    if (void 0 !== Ib) Ub.normalized[Wb] = null !== (Hb = bb.accessors[Ib].normalized) && void 0 !== Hb && Hb, sb.components[Wb] = hb.r[bb.accessors[Ib].type]
                  }
                } else
                  for (const [bb, fb] of hb.j) {
                    const sb = cb.attributes[bb];
                    void 0 !== sb && Ib.push({
                      semantic: bb,
                      kind: fb,
                      accessor: Vb(sb)
                    })
                  }
                return {
                  index: sb,
                  mode: null !== (Wb = cb.mode) && void 0 !== Wb ? Wb : 4,
                  attributes: Ib,
                  indices: Tb || void 0 === cb.indices ? null : Vb(cb.indices),
                  position: void 0 === cb.attributes.POSITION ? null : Vb(cb.attributes.POSITION),
                  material: null !== (ab = cb.material) && void 0 !== ab ? ab : null,
                  draco: Ub
                }
              }));
              return {
                index: sb,
                name: cb.name,
                primitives: kb,
                extras: cb.extras
              }
            })),
            Yb = (null !== (ab = bb.nodes) && void 0 !== ab ? ab : []).map(((bb, cb) => {
              var sb, kb;
              return {
                index: cb,
                name: bb.name,
                children: null !== (sb = bb.children) && void 0 !== sb ? sb : [],
                mesh: null !== (kb = bb.mesh) && void 0 !== kb ? kb : null,
                translation: bb.translation,
                rotation: bb.rotation,
                scale: bb.scale,
                hasCamera: void 0 !== bb.camera,
                extras: bb.extras
              }
            })),
            Jb = null !== (Tb = null === (Ub = bb.extensionsUsed) || void 0 === Ub ? void 0 : Ub.includes("KHR_materials_unlit")) && void 0 !== Tb && Tb,
            Bb = null !== (Ib = null === (Hb = bb.extensionsUsed) || void 0 === Hb ? void 0 : Hb.includes("KHR_texture_transform")) && void 0 !== Ib && Ib,
            tb = (null !== (fb = bb.materials) && void 0 !== fb ? fb : []).map(((bb, cb) => {
              var sb, kb, Wb, ab;
              const Tb = bb.pbrMetallicRoughness,
                Ub = null === Tb || void 0 === Tb ? void 0 : Tb.baseColorTexture;
              return {
                index: cb,
                name: bb.name,
                extras: bb.extras,
                unlit: Jb && void 0 !== (null === (sb = bb.extensions) || void 0 === sb ? void 0 : sb.KHR_materials_unlit),
                pbr: Tb ? {
                  baseColorFactor: Tb.baseColorFactor,
                  metallicFactor: Tb.metallicFactor,
                  roughnessFactor: Tb.roughnessFactor
                } : null,
                baseColorTexture: Ub ? {
                  texture: Ub.index,
                  transform: Bb && (null === (kb = Ub.extensions) || void 0 === kb ? void 0 : kb.KHR_texture_transform) || null
                } : null,
                emissiveFactor: bb.emissiveFactor,
                alphaMode: null !== (Wb = bb.alphaMode) && void 0 !== Wb ? Wb : "OPAQUE",
                alphaCutoff: bb.alphaCutoff,
                doubleSided: null !== (ab = bb.doubleSided) && void 0 !== ab && ab
              }
            })),
            yb = (null !== (Mb = bb.textures) && void 0 !== Mb ? Mb : []).map(((cb, sb) => {
              var kb, Wb;
              const ab = void 0 === cb.sampler ? gb : {
                index: cb.sampler,
                ...null === (kb = bb.samplers) || void 0 === kb ? void 0 : kb[cb.sampler]
              };
              return {
                index: sb,
                sampler: {
                  index: ab.index,
                  magFilter: ab.magFilter,
                  minFilter: ab.minFilter,
                  wrapS: ab.wrapS,
                  wrapT: ab.wrapT
                },
                image: null !== (Wb = cb.source) && void 0 !== Wb ? Wb : -1
              }
            })),
            Pb = (null !== (Xb = bb.images) && void 0 !== Xb ? Xb : []).map(((bb, cb) => ({
              index: cb,
              name: bb.name,
              mimeType: bb.mimeType,
              bufferView: Cb(bb.bufferView)
            }))),
            Db = null !== (nb = (0, hb.y)(bb)) && void 0 !== nb ? nb : 0;
          return {
            json: bb,
            rootNodes: null !== (mb = null === (lb = bb.scenes) || void 0 === lb || null === (Qb = lb[Db]) || void 0 === Qb ? void 0 : Qb.nodes) && void 0 !== mb ? mb : [],
            nodes: Yb,
            meshes: ub,
            materials: tb,
            textures: yb,
            images: Pb
          }
        }(sb, kb)
      } catch (ab) {
        throw ab instanceof hb.k ? ab : new hb.k(`reading the GLB failed: ${ab instanceof Error?ab.message:String(ab)}`)
      }
    }
    async function tb(bb, cb) {
      var sb, kb;
      const Wb = bb.draco;
      if (!Wb) throw new hb.k("not a Draco primitive");
      let ab;
      try {
        ab = await cb(Wb.bufferView.bytes, Wb.attributeIds, Wb.expected)
      } catch (Hb) {
        throw new hb.k(`Draco decoding failed: ${Hb instanceof Error?Hb.message:String(Hb)}`)
      }
      const {
        vertices: Tb,
        indices: Ub,
        components: Ib
      } = Wb.expected;
      if (ab.totalVertices !== Tb || (null !== (sb = null === (kb = ab.indices) || void 0 === kb ? void 0 : kb.length) && void 0 !== sb ? sb : 0) !== Ub || ab.attributes.some((bb => bb.size !== Ib[bb.kind] || bb.data.length !== Tb * bb.size))) throw new hb.k("Draco decoding gave other counts than the accessors declare");
      for (const fb of ab.attributes) {
        const bb = Wb.normalized[fb.kind];
        void 0 !== bb && (fb.normalized = bb)
      }
      return ab
    }
    const yb = new WeakMap;

    function Pb(bb, cb) {
      var sb;
      const kb = null !== (sb = yb.get(bb)) && void 0 !== sb ? sb : cb(bb);
      return yb.set(bb, kb), kb
    }

    function Db(bb) {
      const cb = bb.bufferView,
        sb = 5125 === bb.componentType ? Uint32Array : Uint16Array,
        kb = cb.bytes.buffer,
        Wb = cb.bytes.byteOffset + (bb.byteOffset || 0);
      return Wb % sb.BYTES_PER_ELEMENT !== 0 ? new sb(kb.slice(Wb, Wb + bb.count * sb.BYTES_PER_ELEMENT), 0) : new sb(kb, Wb, bb.count)
    }

    function Eb(bb, cb) {
      if (bb.min && bb.max) return [new Float64Array(bb.min), new Float64Array(bb.max)];
      const sb = cb.find((bb => {
          let {
            kind: cb
          } = bb;
          return "position" === cb
        })),
        kb = sb ? (0, Yb.h)(sb, bb.count) : new Float32Array(0);
      return (0, Yb.r)(kb.length / 3, ((bb, cb) => kb[3 * bb + cb]))
    }

    function ib(bb) {
      const cb = bb.attributes.map((bb => {
          var cb, sb;
          let {
            kind: kb,
            accessor: Wb
          } = bb;
          const {
            bufferView: ab,
            numComponents: Tb
          } = Wb;
          if (!ab) {
            return {
              kind: kb,
              data: Pb(Wb, (() => new Float32Array(Tb * Wb.count))),
              offset: 0,
              stride: 4 * Tb,
              components: Tb,
              glType: 5126,
              isNormalized: !1
            }
          }
          const Ub = null !== (cb = ab.byteStride) && void 0 !== cb ? cb : Tb * hb.d[Wb.componentType];
          return {
            kind: kb,
            data: ab.bytes,
            offset: null !== (sb = Wb.byteOffset) && void 0 !== sb ? sb : 0,
            stride: Ub,
            components: Tb,
            glType: Wb.componentType,
            isNormalized: Wb.normalized
          }
        })),
        sb = bb.indices,
        kb = sb && Pb(sb, Db),
        Wb = bb.position;
      return new Yb.e(cb, kb, Wb.count, ...Eb(Wb, cb))
    }
    const Ob = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function Gb(bb, cb) {
      const sb = cb.attributes.map((bb => {
        let {
          kind: cb,
          data: sb,
          size: kb,
          byteOffset: Wb,
          byteStride: ab,
          normalized: Tb
        } = bb;
        return {
          kind: cb,
          data: sb,
          offset: Wb,
          stride: ab,
          components: kb,
          glType: 5120 + Ob.indexOf(sb.constructor),
          isNormalized: Tb
        }
      }));
      return new Yb.e(sb, cb.indices, cb.totalVertices, ...Eb(bb.position, sb))
    }

    function Kb(bb) {
      const cb = bb.lastIndexOf("/");
      return cb < 0 ? bb : bb.substring(cb + 1)
    }

    function Zb(bb) {
      const cb = bb.lastIndexOf("/");
      return cb < 0 ? "" : bb.substring(0, cb + 1)
    }

    function zb(bb) {
      return bb.name || `node${bb.index}`
    }
    const qb = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      db = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      Ab = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function wb(bb) {
      var cb, sb, kb, Wb;
      const ab = null !== (cb = bb.minFilter) && void 0 !== cb ? cb : 9987;
      return 9729 === (null !== (sb = bb.magFilter) && void 0 !== sb ? sb : 9729) ? null !== (kb = db[ab]) && void 0 !== kb ? kb : 3 : null !== (Wb = Ab[ab]) && void 0 !== Wb ? Wb : 4
    }
    const rb = {
      33071: 0,
      33648: 2
    };

    function ob(bb) {
      var cb;
      return null !== (cb = rb[null !== bb && void 0 !== bb ? bb : 10497]) && void 0 !== cb ? cb : 1
    }

    function Sb(bb) {
      return 9728 === bb.minFilter || 9729 === bb.minFilter
    }

    function Rb(bb) {
      var cb, sb, kb;
      const Wb = Float64Array.from(null !== (cb = bb.scale) && void 0 !== cb ? cb : [1, 1, 1]);
      return bb.hasCamera && (Wb[0] = -1), {
        translation: Float64Array.from(null !== (sb = bb.translation) && void 0 !== sb ? sb : [0, 0, 0]),
        rotation: Float64Array.from(null !== (kb = bb.rotation) && void 0 !== kb ? kb : [0, 0, 0, 1]),
        scale: Wb
      }
    }

    function vb(bb, cb) {
      let {
        translation: sb,
        rotation: kb,
        scale: Wb
      } = bb;
      const ab = new Float32Array(16);
      return (0, ub.d)(Wb, 0, kb, 0, sb, 0, ab), cb && (0, ub.p)(ab, cb, 0, ab), ab
    }
    class Fb {
      constructor(bb, cb, sb, kb) {
        this.model = bb, this.decode = cb, this.fileInfo = sb, this.uniqueRootUrl = kb, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const Wb = new Set,
          ab = (cb, sb) => {
            const kb = bb.nodes[cb];
            if (this.parents.has(kb)) throw new hb.k(`/nodes/${cb}: Invalid recursive node hierarchy`);
            this.parents.set(kb, sb);
            const Tb = null === kb.mesh ? [] : bb.meshes[kb.mesh].primitives,
              Ub = Tb.map((bb => {
                const cb = Tb.length > 1;
                return {
                  name: cb ? `${zb(kb)}_primitive${bb.index}` : zb(kb),
                  node: kb,
                  primitive: bb,
                  part: cb,
                  geometry: null
                }
              }));
            this.uses.set(kb, Ub);
            const Ib = null !== kb.mesh && Wb.has(kb.mesh);
            Wb.add(kb.mesh), this.own.set(kb, Ib ? [] : Ub);
            for (const bb of kb.children) ab(bb, kb)
          };
        for (const Tb of bb.rootNodes) ab(Tb, null);
        this.primitives = bb.nodes.flatMap((bb => {
          var cb;
          return null !== (cb = this.own.get(bb)) && void 0 !== cb ? cb : []
        }))
      }
      decodeGeometries() {
        const bb = new Map;
        return Promise.all(this.primitives.map((async cb => {
          const {
            primitive: sb
          } = cb, kb = sb.draco;
          let Wb = kb ? bb.get(kb.bufferView.index) : Promise.resolve(ib(sb));
          Wb || (Wb = tb(sb, this.decode).then((bb => Gb(sb, bb))), bb.set(kb.bufferView.index, Wb)), cb.geometry = await Wb
        })))
      }
      parentOf(bb) {
        var cb;
        return null !== (cb = this.parents.get(bb)) && void 0 !== cb ? cb : null
      }
      meshesUnder(bb) {
        const cb = this.model.nodes.filter((bb => this.uses.has(bb)));
        for (const kb of cb) {
          const cb = this.uses.get(kb),
            sb = cb.find((cb => cb.name === bb));
          if (sb) return 1 === cb.length ? this.subtree(kb) : this.own.get(kb).includes(sb) ? [sb] : []
        }
        const sb = cb.find((cb => 1 !== this.uses.get(cb).length && zb(cb) === bb));
        return sb ? this.subtree(sb) : null
      }
      subtree(bb) {
        return [...this.own.get(bb), ...bb.children.flatMap((bb => this.subtree(this.model.nodes[bb])))]
      }
      worldMatrix(bb, cb, sb) {
        let kb = vb(Rb(cb ? qb : {}), null);
        const Wb = [];
        for (let Tb = bb.part ? bb.node : this.parentOf(bb.node); Tb; Tb = this.parentOf(Tb)) Wb.unshift(Tb);
        for (const Tb of Wb) kb = vb(Rb(Tb), kb);
        const ab = Rb(bb.part ? {} : bb.node);
        return void 0 !== sb && ab.scale.fill(sb), vb(ab, kb)
      }
      floats(bb) {
        const {
          vertexAttributes: cb,
          vertexCount: sb
        } = bb.geometry;
        return new Map(cb.map((bb => [bb.kind, (0, Yb.h)(bb, sb)])))
      }
      imageUrl(bb) {
        return function(bb, cb, sb) {
          let {
            name: kb
          } = cb;
          return `data:${bb}${kb}#image${sb}`
        }(this.uniqueRootUrl, this.fileInfo, bb)
      }
      textureDesc(bb, cb) {
        var sb;
        let {
          texture: kb,
          transform: Wb
        } = bb;
        const {
          sampler: ab,
          image: Tb
        } = this.model.textures[kb], {
          bufferView: Ub,
          mimeType: Ib,
          name: Hb
        } = this.model.images[Tb], fb = Wb && {
          ...Wb.offset ? {
            uOffset: Wb.offset[0],
            vOffset: Wb.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...Wb.rotation ? {
            wAng: -Wb.rotation
          } : {},
          ...Wb.scale ? {
            uScale: Wb.scale[0],
            vScale: Wb.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(Tb),
          noMipmap: Sb(ab),
          invertY: !1,
          samplingMode: wb(ab),
          data: {
            bytes: Ub.bytes,
            mimeType: Ib,
            label: Hb,
            context: `/textures/${kb}`
          },
          sets: {
            wrapU: ob(ab.wrapS),
            wrapV: ob(ab.wrapT),
            ...fb,
            coordinatesIndex: null !== (sb = null === Wb || void 0 === Wb ? void 0 : Wb.texCoord) && void 0 !== sb ? sb : 0,
            hasAlpha: cb
          }
        }
      }
    }
    async function xb(bb, cb, sb, kb, Wb, ab) {
      let Tb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const Ub = function(bb, cb, sb) {
          return "string" !== typeof cb ? {
            url: "",
            rootUrl: bb,
            name: sb()
          } : cb ? cb.startsWith("data:") ? {
            url: cb,
            rootUrl: bb,
            name: ""
          } : bb ? {
            url: bb + cb,
            rootUrl: bb,
            name: cb
          } : {
            url: cb,
            rootUrl: Zb(cb),
            name: Kb(cb)
          } : {
            url: bb,
            rootUrl: Zb(bb),
            name: Kb(bb)
          }
        }(sb, bb, Wb),
        Ib = {};
      cb.addPendingData(Ib);
      try {
        const sb = Bb(await async function(bb, cb) {
            return "string" !== typeof cb ? cb : bb.url.startsWith("data:") ? (0, hb.u)(bb.url) : await (0, hb.x)(bb.url)
          }(Ub, bb)),
          Ib = new Fb(sb, kb, Ub, function(bb, cb) {
            let {
              rootUrl: sb,
              name: kb
            } = bb;
            return !sb.startsWith("file:") && kb ? sb : `${sb}${cb()}/`
          }(Ub, Wb));
        return await ab(Ib), cb.importedMeshesFiles && (cb.loadingPluginName = "fY", Tb && cb.importedMeshesFiles.push(Ub.url)), Ib
      } finally {
        cb.removePendingData(Ib)
      }
    }
    var jb = sb(37134),
      pb = sb(36994),
      bc = sb(37489);

    function cc(bb) {
      if (null === bb || void 0 === bb || !bb.min || !bb.max) return null;
      const [cb, sb, kb] = bb.min, [Wb, ab, Tb] = bb.max, {
        BoundingInfo: Ub,
        Fm: Ib
      } = (0, jb.d)();
      return new Ub(new Ib(cb, sb, kb), new Ib(Wb, ab, Tb))
    }

    function sc(bb) {
      (0, pb.d)(bb) || (bb.geometry && bb.geometry.useBoundingInfoFromGeometry ? bb._updateBoundingInfo() : bb.refreshBoundingInfo(!0, !0))
    }
    class kc {
      constructor(bb, cb) {
        this.aQ = bb, this.decode = cb, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(bb) {
        let cb = this.viewData.get(bb.index);
        return cb || (cb = this.bufferData.then((() => bb.bytes)), this.viewData.set(bb.index, cb)), cb
      }
      viewBuffer(bb) {
        let cb = this.viewBuffers.get(bb.index);
        return cb || (cb = this.viewBytes(bb).then((bb => new((0, jb.d)().Dm)(this.aQ.Sm(), bb, !1))), this.viewBuffers.set(bb.index, cb)), cb
      }
      vertexBuffer(bb, cb) {
        const {
          kind: sb,
          data: kb
        } = cb, Wb = `${bb.index}:${sb}`;
        let ab = this.vertexBuffers.get(Wb);
        if (!ab) {
          const Tb = bb.bufferView;
          ab = Tb ? this.viewBuffer(Tb).then((bb => this.layoutVertexBuffer(bb, cb))) : Promise.resolve(kb).then((bb => new((0, jb.d)().VertexBuffer)(this.aQ.Sm(), bb, sb, !1))), this.vertexBuffers.set(Wb, ab)
        }
        return ab
      }
      layoutVertexBuffer(bb, cb) {
        let {
          kind: sb,
          offset: kb,
          stride: Wb,
          components: ab,
          glType: Tb,
          isNormalized: Ub
        } = cb;
        const Ib = this.aQ.Sm();
        return new((0, jb.d)().VertexBuffer)(Ib, bb, sb, !1, void 0, Wb, void 0, kb, ab, Tb, Ub, !0, void 0, !0)
      }
      load(bb, cb, sb) {
        const kb = (0, pb.d)(sb),
          Wb = bb => {
            kb || (sb._delayInfo = sb._delayInfo || [], -1 === sb._delayInfo.indexOf(bb) && sb._delayInfo.push(bb))
          },
          ab = cb.draco;
        if (ab) {
          for (const bb in ab.attributeIds) Wb(bb);
          let Tb = this.dracoGeometry.get(ab.bufferView.index);
          return Tb || (Tb = this.viewBytes(ab.bufferView).then((async () => {
            let Wb;
            try {
              Wb = await tb(cb, this.decode)
            } catch (Ib) {
              throw new hb.k(`${bb}: ${Ib instanceof Error?Ib.message:String(Ib)}`)
            }
            const ab = Gb(cb, Wb);
            if (kb) return ab;
            const Tb = cc(cb.position),
              Ub = new((0, jb.d)().MirroredGeometry)(sb.name, this.aQ);
            Tb && (Ub._boundingInfo = Tb, Ub.useBoundingInfoFromGeometry = !0), ab.indexData && Ub.setIndices(ab.indexData);
            for (const bb of ab.vertexAttributes) Ub.setVerticesBuffer(this.layoutVertexBuffer(bb.data, bb), ab.vertexCount);
            return Ub.link(ab), Ub
          })), this.dracoGeometry.set(ab.bufferView.index, Tb)), Tb
        }
        const Tb = [],
          Ub = ib(cb);
        if (kb) return sb.isUnIndexed = !Ub.indexData, sb.hasVertexAlpha = (0, bc.g)(cb), Promise.resolve(Ub);
        const Ib = new((0, jb.d)().MirroredGeometry)(sb.name, this.aQ),
          {
            indexData: Hb
          } = Ub;
        Hb ? Tb.push(this.viewBytes(cb.indices.bufferView).then((() => {
          Ib.setIndices(Hb)
        }))) : sb.isUnIndexed = !0;
        for (const [fb, {
            kind: Mb,
            accessor: Xb
          }] of cb.attributes.entries()) Wb(Mb), Tb.push(this.vertexBuffer(Xb, Ub.vertexAttributes[fb]).then((bb => {
          if ("position" === bb.getKind()) {
            const bb = cc(Xb);
            bb && (Ib._boundingInfo = bb, Ib.useBoundingInfoFromGeometry = !0)
          }
          Ib.setVerticesBuffer(bb, Ub.vertexCount)
        })));
        return (0, bc.g)(cb) && (sb.hasVertexAlpha = !0), Promise.all(Tb).then((() => (Ib.link(Ub), Ib)))
      }
    }
    var Wc, ac = sb(36867),
      Tc = sb(36654),
      Uc = sb(37497),
      Ic = sb(36814),
      Hc = sb(36855),
      fc = sb(2612),
      Mc = sb(36842);

    function Xc(bb, cb) {
      bb.metadata = bb.metadata || {};
      const sb = bb._internalMetadata = bb._internalMetadata || {},
        kb = sb.fY = sb.fY || {};
      (kb.pointers = kb.pointers || []).push(cb)
    }

    function nc(bb, cb) {
      if (cb && Object.keys(cb).length > 0) {
        const sb = bb.metadata = bb.metadata || {};
        (sb.fY = sb.fY || {}).extras = cb
      }
    }

    function mc(bb, cb) {
      cb.position = bb.translation ? Tc.Fm.FromArray(bb.translation) : Tc.Fm.Zero(), cb.rotationQuaternion = bb.rotation ? Tc.Quaternion.FromArray(bb.rotation) : Tc.Quaternion.Identity(), cb.bl = bb.scale ? Tc.Fm.FromArray(bb.scale) : Tc.Fm.One()
    }
    class lc {
      constructor(bb, cb) {
        if (this.aQ = bb, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, cb) {
          const cb = bb.Sm(),
            sb = bb.ZY.add((() => {
              this.dispose()
            })),
            kb = cb.onContextRestoredObservable.add((() => {
              for (const bb of [...this.geometries, ...this.meshes, ...this.textures]) bb._rebuild()
            }));
          this.release = () => {
            bb.ZY.remove(sb), cb.onContextRestoredObservable.remove(kb)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const bb of this.meshes) this.aQ.Ksb(bb);
          for (const bb of this.materials) this.aQ.addMaterial(bb);
          for (const bb of this.geometries) this.aQ.addGeometry(bb);
          for (const bb of this.transformNodes) this.aQ.addTransformNode(bb);
          for (const bb of this.textures) this.aQ.addTexture(bb)
        }
      }
      dispose() {
        var bb;
        for (const cb of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const bb of cb.slice()) bb.dispose();
          cb.length = 0
        }
        null === (bb = this.release) || void 0 === bb || bb.call(this), this.release = null
      }
    }
    class Qc {
      constructor(bb, cb, sb, kb, Wb, ab, Tb) {
        this.asset = bb, this.aQ = cb, this.tree = sb, this.geometryData = Wb, this.materials = ab, this.lite = Tb, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = kb ? sb : null
      }
      create(bb) {
        if (this.lite) return bb();
        const cb = this.aQ;
        cb._blockEntityCollection = !!this.container;
        try {
          const cb = bb();
          return this.container && (cb._parentContainer = this.container), cb
        } finally {
          cb._blockEntityCollection = !1
        }
      }
      node(bb, cb) {
        return this.create((() => this.lite ? cb ? (0, Uc.g)(this.lite, bb) : (0, Uc.x)(this.lite, bb) : cb ? new((0, jb.d)().Mesh)(bb, this.aQ) : new((0, jb.d)().TransformNode)(bb, this.aQ)))
      }
      async load() {
        var bb;
        this.asset.model.json.nodes && this.createRoot();
        const cb = this.lite ? null : this.aQ,
          sb = null !== (bb = null === cb || void 0 === cb ? void 0 : cb.blockMaterialDirtyMechanism) && void 0 !== bb && bb;
        let kb;
        cb && (cb.blockMaterialDirtyMechanism = !0);
        try {
          kb = this.loadScene()
        } finally {
          null === cb || void 0 === cb || cb._forceBlockMaterialDirtyMechanism(sb)
        }
        await kb;
        const {
          root: Wb,
          tree: ab
        } = this;
        Wb && (Wb.GV(!0), ab.meshes.push(Wb), ab.rootNodes.push(Wb));
        for (const Ub of this.asset.model.nodes) {
          const bb = this.nodeObjects.get(Ub.index);
          bb && ["TransformNode", "LiteNode"].includes(bb.getClassName()) && ab.transformNodes.push(bb);
          for (const cb of null !== (Tb = this.nodePrimitives.get(Ub.index)) && void 0 !== Tb ? Tb : []) {
            var Tb;
            ab.meshes.push(cb);
            const bb = cb.geometry;
            bb && !ab.geometries.includes(bb) && ab.geometries.push(bb)
          }
        }
      }
      createRoot() {
        const bb = this.node("__root__", !0);
        this.root = bb, bb.GV(!1), this.aQ.useRightHandedSystem || mc(qb, bb)
      }
      loadScene() {
        const bb = [];
        for (const cb of this.asset.model.rootNodes) bb.push(this.loadNode(this.asset.model.nodes[cb], (bb => {
          bb.parent = this.root
        })));
        return bb.push(Promise.resolve()), Promise.all(bb).then((() => {}))
      }
      loadNode(bb, cb) {
        const sb = `/nodes/${bb.index}`,
          kb = [],
          Wb = Wb => {
            if (Xc(Wb, sb), mc(bb, Wb), bb.hasCamera && !this.aQ.useRightHandedSystem) {
              const {
                bl: bb
              } = Wb;
              bb.set(-1, bb.y, bb.z)
            }
            for (const cb of bb.children) kb.push(this.loadNode(this.asset.model.nodes[cb], (bb => {
              bb.parent = Wb
            })));
            (sb => {
              nc(sb, bb.extras), cb(sb)
            })(Wb)
          };
        if (null === bb.mesh) {
          const cb = this.node(zb(bb), !1);
          this.nodeObjects.set(bb.index, cb), Wb(cb)
        } else {
          const cb = this.asset.model.meshes[bb.mesh];
          kb.push(this.loadMesh(`/meshes/${cb.index}`, bb, cb, Wb))
        }
        return Promise.all(kb).then((() => {
          for (const sb of null !== (cb = this.nodePrimitives.get(bb.index)) && void 0 !== cb ? cb : []) {
            var cb;
            sc(sb)
          }
          return this.nodeObjects.get(bb.index)
        }))
      }
      loadMesh(bb, cb, sb, kb) {
        const Wb = [],
          ab = zb(cb);
        if (1 === sb.primitives.length) {
          const kb = sb.primitives[0];
          Wb.push(this.loadPrimitive(`${bb}/primitives/${kb.index}`, ab, kb, (bb => {
            this.nodeObjects.set(cb.index, bb), this.nodePrimitives.set(cb.index, [bb])
          })))
        } else {
          const kb = this.node(ab, !1);
          this.nodeObjects.set(cb.index, kb);
          const Tb = [];
          this.nodePrimitives.set(cb.index, Tb);
          for (const cb of sb.primitives) Wb.push(this.loadPrimitive(`${bb}/primitives/${cb.index}`, `${ab}_primitive${cb.index}`, cb, (bb => {
            bb.parent = kb, Tb.push(bb)
          })))
        }
        const Tb = this.nodeObjects.get(cb.index);
        return kb(Tb), Promise.all(Wb).then((() => Tb))
      }
      loadPrimitive(bb, cb, sb, kb) {
        const Wb = [],
          ab = this.node(cb, !0);
        if (ab.sideOrientation = this.aQ.useRightHandedSystem ? Ic.e.CounterClockWiseSideOrientation : Ic.e.ClockWiseSideOrientation, Wb.push(this.geometryData.load(bb, sb, ab).then((bb => {
            if ((0, pb.d)(ab)) {
              var cb, sb;
              const kb = bb;
              ab.replaceModel(kb, Int32Array.of(0, null !== (cb = null === (sb = kb.indexData) || void 0 === sb ? void 0 : sb.length) && void 0 !== cb ? cb : kb.vertexCount, 0, kb.vertexCount))
            } else this.create((() => (bb.applyToMesh(ab), bb)))
          }))), this.materials) {
          const bb = 0 === sb.mode ? Ic.e.PointListDrawMode : Ic.e.TriangleFillMode,
            cb = null === sb.material ? null : this.asset.model.materials[sb.material];
          Wb.push(this.loadMaterial(cb, bb, (bb => {
            ab.material = bb
          })))
        }
        return Xc(ab, bb), kb(ab), Promise.all(Wb).then((() => ab))
      }
      loadMaterial(bb, cb, sb) {
        var kb;
        const Wb = `${null!==(kb=null===bb||void 0===bb?void 0:bb.index)&&void 0!==kb?kb:"default"}:${cb}`;
        let ab = this.materialData.get(Wb);
        return ab || (ab = this.createMaterial(bb, cb), this.materialData.set(Wb, ab)), sb(ab.material), ab.promise
      }
      createMaterial(bb, cb) {
        const sb = bb ? bb.name || `material${bb.index}` : "__GLTFLoader._default",
          {
            style: kb,
            unlit: Wb
          } = this.materials;
        let ab;
        const Tb = this.create((() => {
          const Tb = (0, Mc.d)({
            name: sb,
            aQ: this.aQ,
            sets: {
              ...(0, bc.c)(this.asset, bb, kb, Wb),
              fillMode: cb
            },
            unrendered: !0
          });
          return ab = Tb.model, Tb.mirror
        }));
        let Ub = Promise.resolve();
        if (bb) {
          const cb = `/materials/${bb.index}`,
            kb = ab.diffuseTexture;
          if (kb && !kb.mirror) Ub = new Promise((bb => setTimeout(bb)));
          else if (kb) {
            const Wb = kb.mirror;
            Wb._parentContainer = this.container, Wb.name = `${sb} (Base Color)`, Xc(Wb, `${cb}${bb.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(Wb), Ub = (0, Hc.A)(kb)
          }
          nc(Tb, bb.extras), Xc(Tb, cb)
        }
        return this.tree.materials.push(Tb), {
          material: Tb,
          promise: Ub
        }
      }
    }

    function ec() {
      ac.e.dracoDecodes = lb.decodes, ac.e.dracoWorkersStarted = lb.workersStarted, ac.e.dracoMostWorkers = lb.mostWorkers
    }
    async function Cc(bb, cb, sb, Wb, ab) {
      try {
        return await async function(bb, cb, sb, Wb, ab, Tb) {
          var Ub;
          let Ib;
          const Hb = null === (Ub = (0, fc.e)()) || void 0 === Ub ? void 0 : Ub.Cl,
            fb = null !== Hb && void 0 !== Hb && Hb.Nl && cb === Hb.EY() ? Hb : null,
            Mb = ab && !fb;
          return await xb(bb, cb, sb, Wb, kb.b, (bb => (Ib = new lc(cb, Mb), new Qc(bb, cb, Ib, Mb, new kc(cb, Wb), Tb, fb).load())), !ab), Ib
        }(bb, cb, sb, Lb, Wb, ab)
      } finally {
        ec()
      }
    }
    async function Nc(bb, cb, sb, Wb) {
      try {
        return await xb(bb, cb, sb, Lb, kb.b, (bb => Wb(bb, new kc(cb, Lb))))
      } finally {
        ec()
      }
    }
    Wc = Wb.c, fb || (fb = {
      scriptUrl: new URL(Wc.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(Wc.wasmBinaryUrl, location.href).href
    })
  },
  40919: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Tb
    });
    var kb = sb(167),
      Wb = sb(1217);

    function ab(bb) {
      return (0, kb.b)() ? `https://${Wb.d.discordDomain}/${bb.href}` : bb.href
    }
    const Tb = {
      scriptUrl: ab(new sb.U(sb(40924))),
      wasmBinaryUrl: ab(new sb.U(sb(40928)))
    }
  },
  35924: bb => {
    bb.exports = function(bb, cb, sb, kb) {
      var Wb = self || window;
      try {
        try {
          var ab;
          try {
            ab = new Wb.Blob([bb])
          } catch (Hb) {
            (ab = new(Wb.BlobBuilder || Wb.WebKitBlobBuilder || Wb.MozBlobBuilder || Wb.MSBlobBuilder)).append(bb), ab = ab.getBlob()
          }
          var Tb = Wb.URL || Wb.webkitURL,
            Ub = Tb.createObjectURL(ab),
            Ib = new Wb[cb](Ub, sb);
          return Tb.revokeObjectURL(Ub), Ib
        } catch (Hb) {
          return new Wb[cb]("data:application/javascript,".concat(encodeURIComponent(bb)), sb)
        }
      } catch (Hb) {
        if (!kb) throw Error("Inline worker is not supported");
        return new Wb[cb](kb, sb)
      }
    }
  },
  40924: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  40928: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);