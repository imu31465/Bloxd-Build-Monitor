export const id = 204;
export const ids = [204];
export const modules = {
  40936: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      loadGlbAsset: () => Ku,
      loadGlbTree: () => lu
    });
    var Bb = hb(37507),
      Ob = hb(40945),
      Gb = hb(35898),
      Ub = hb.n(Gb);

    function Lb() {
      return Ub()('(()=>{class bb extends Error{}function ub(ub,hb){const Bb=ub._malloc(hb);if(0===Bb)throw new bb(`Draco: the decoder\'s heap refused ${hb} bytes`);return Bb}function hb(bb){return{[bb.DT_FLOAT32]:[Float32Array,5126],[bb.DT_INT8]:[Int8Array,5120],[bb.DT_INT16]:[Int16Array,5122],[bb.DT_INT32]:[Int32Array,5124],[bb.DT_UINT8]:[Uint8Array,5121],[bb.DT_UINT16]:[Uint16Array,5123],[bb.DT_UINT32]:[Uint32Array,5125]}}function Bb(ub,Bb,Ob,Gb,Ub){let Lb=null,Yb=null,Sb=null;try{Lb=new ub.Decoder,Yb=new ub.DecoderBuffer,Yb.Init(Bb,Bb.byteLength);let ab=0;const Hb=Lb.GetEncodedGeometryType(Yb);if(Hb===ub.TRIANGULAR_MESH){const hb=new ub.Mesh;Sb=hb;const Bb=Lb.DecodeBufferToMesh(Yb,hb);if(!Bb.ok()||0===hb.ptr)throw new bb(Bb.error_msg());ab=3*hb.num_faces()}else{if(Hb!==ub.POINT_CLOUD)throw new bb(`Draco: Cannot decode invalid geometry type ${Hb}`);{const hb=new ub.PointCloud;Sb=hb;const Bb=Lb.DecodeBufferToPointCloud(Yb,hb);if(!Bb.ok()||!hb.ptr)throw new bb(Bb.error_msg())}}const wb=Sb.num_points();if(wb!==Gb.vertices||ab!==Gb.indices)throw new bb(`Draco: decoded ${wb} vertices and ${ab} indices, the accessors declare ${Gb.vertices} and ${Gb.indices}`);const Zb=hb(ub),Xb=[];for(const{kind:ub,id:hb,components:Bb}of Ob){const Ob=Lb.GetAttributeByUniqueId(Sb,hb);if(!Ob||0===Ob.ptr)throw new bb(`Draco: no attribute with id ${hb} (${ub})`);const Gb=Ob.data_type();if(!Zb[Gb])throw new bb(`Draco: Cannot decode invalid data type ${Gb}`);if(Ob.num_components()!==Bb)throw new bb(`Draco: ${ub} decodes to ${Ob.num_components()} components, its accessor declares ${Bb}`);Xb.push([ub,Ob,Gb])}return Ub({dracoDecoder:Lb,geometry:Sb,triangles:Hb===ub.TRIANGULAR_MESH,numPoints:wb,numIndices:ab,attributes:Xb})}finally{Sb&&ub.destroy(Sb),Yb&&ub.destroy(Yb),Lb&&ub.destroy(Lb)}}const Ob=self;let Gb=null;self.onmessage=bb=>{let{data:Ub}=bb;if("init"===Ub.id){try{importScripts(Ub.url),Gb=DracoDecoderModule({wasmBinary:Ub.wasmBinary}),Ob.postMessage({id:"initDone"})}catch(Hb){Ob.postMessage({id:"initError",message:Hb instanceof Error?Hb.message:String(Hb)})}return}const{seq:Lb,data:Yb,attributeIds:Sb,expected:ab}=Ub;Gb?Gb.then((bb=>{try{const Gb=function(bb,Ob,Gb,Ub){const Lb=Object.keys(Gb).map((bb=>({kind:bb,id:Gb[bb],components:Ub.components[bb]})));return Bb(bb,Ob,Lb,Ub,(Bb=>{let{dracoDecoder:Ob,geometry:Gb,triangles:Ub,numPoints:Lb,numIndices:Yb,attributes:Sb}=Bb;const ab=hb(bb);let Hb=null;if(Ub){const hb=4*Yb,Bb=ub(bb,hb);try{Ob.GetTrianglesUInt32Array(Gb,hb,Bb),Hb=new Uint32Array(Yb),Hb.set(new Uint32Array(bb.HEAPF32.buffer,Bb,Yb))}finally{bb._free(Bb)}}const wb=[];for(const[hb,Zb,Xb]of Sb){const[Bb]=ab[Xb],Ub=Zb.num_components(),Yb=Lb*Ub,Sb=Yb*Bb.BYTES_PER_ELEMENT,Hb=ub(bb,Sb);try{Ob.GetAttributeDataArrayForAllPoints(Gb,Zb,Xb,Sb,Hb),wb.push({kind:hb,data:new Bb(bb.HEAPF32.buffer,Hb,Yb).slice(),size:Ub,byteOffset:Zb.byte_offset(),byteStride:Zb.byte_stride(),normalized:Zb.normalized()})}finally{bb._free(Hb)}}return{indices:Hb,attributes:wb,totalVertices:Lb}}))}(bb,Yb,Sb,ab),Ub=Gb.attributes.map((bb=>bb.data.buffer));Gb.indices&&Ub.push(Gb.indices.buffer),Ob.postMessage({id:"decoded",seq:Lb,...Gb},Ub)}catch(Hb){Ob.postMessage({id:"decodeError",seq:Lb,message:Hb instanceof Error?Hb.message:String(Hb)})}}),(bb=>{Ob.postMessage({id:"decodeError",seq:Lb,message:bb instanceof Error?bb.message:String(bb)})})):Ob.postMessage({id:"decodeError",seq:Lb,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, hb.p + "dracoDecode.worker.a92cb1c0.worker.js")
    }
    var Yb = hb(86);
    const Sb = 1e3;
    let ab = null,
      Hb = null;
    const wb = [],
      Zb = [];
    let Xb = 0;
    const pb = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      ob = function(bb, ub) {
        const hb = bb ? Math.max(1, Math.min(Math.floor(.5 * bb), 4)) : 1;
        return ub ? Math.min(hb, 2) : hb
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, Yb.isMobile)());

    function Ab() {
      if (!ab) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: bb,
        wasmBinaryUrl: ub
      } = ab;
      return Hb ??= fetch(ub).then((bb => {
        if (!bb.ok) throw new Error(`Draco: fetching ${ub} failed: ${bb.status}`);
        return bb.arrayBuffer()
      })), Hb.catch((() => {
        Hb = null
      })), pb.workersStarted++, Hb.then((ub => new Promise(((hb, Bb) => {
        const Ob = new Lb;
        Ob.onerror = bb => {
          Ob.onmessage = null, Ob.onerror = null, Ob.terminate(), Bb(new Error("Draco: the decode worker failed to start" + (bb.message ? `: ${bb.message}` : " (its script did not load)")))
        }, Ob.onmessage = bb => {
          let {
            data: ub
          } = bb;
          Ob.onmessage = null, Ob.onerror = null, "initDone" === ub.id ? hb(Ob) : (Ob.terminate(), Bb(new Error(`Draco: ${"initError"===ub.id?ub.message:"the worker did not start"}`)))
        };
        const Gb = ub.slice(0),
          Ub = {
            id: "init",
            url: bb,
            wasmBinary: Gb
          };
        Ob.postMessage(Ub, [Gb])
      }))))
    }

    function lb(bb) {
      const ub = wb.indexOf(bb); - 1 !== ub && wb.splice(ub, 1);
      const hb = Zb.shift();
      hb && Wb(hb)
    }

    function Kb(bb, ub) {
      bb.busy = !0, bb.releaseTimer && (clearTimeout(bb.releaseTimer), bb.releaseTimer = null);
      bb.worker.then((hb => {
        const Bb = Xb++;
        hb.onmessage = Ob => {
          let {
            data: Gb
          } = Ob;
          if (("decoded" === Gb.id || "decodeError" === Gb.id) && Gb.seq === Bb) {
            if (hb.onmessage = null, hb.onerror = null, "decoded" === Gb.id) return pb.decodes++, ub.resolve({
              indices: Gb.indices,
              attributes: Gb.attributes,
              totalVertices: Gb.totalVertices
            }), void(() => {
              const ub = Zb.shift();
              ub ? Kb(bb, ub) : (bb.busy = !1, bb.releaseTimer = setTimeout((() => {
                const ub = wb.indexOf(bb); - 1 !== ub && wb.splice(ub, 1), bb.worker.then((bb => {
                  bb.terminate()
                }))
              }), Sb))
            })();
            hb.terminate(), ub.reject(new Error(Gb.message)), lb(bb)
          }
        }, hb.onerror = Bb => {
          hb.onmessage = null, hb.onerror = null, hb.terminate(), ub.reject(new Error(`Draco: the decode worker failed: ${Bb.message}`)), lb(bb)
        };
        const Ob = {
          id: "decode",
          seq: Bb,
          data: ub.data,
          attributeIds: ub.attributeIds,
          expected: ub.expected
        };
        hb.postMessage(Ob, [ub.data.buffer])
      }), (hb => {
        ub.reject(hb instanceof Error ? hb : new Error(String(hb))), lb(bb)
      }))
    }

    function Wb(bb) {
      const ub = wb.find((bb => !bb.busy));
      if (ub) Kb(ub, bb);
      else {
        if (wb.length < ob) {
          const ub = {
            worker: Ab(),
            busy: !0,
            releaseTimer: null
          };
          return wb.push(ub), pb.mostWorkers = Math.max(pb.mostWorkers, wb.length), void Kb(ub, bb)
        }
        Zb.push(bb)
      }
    }

    function Cb(bb, ub, hb) {
      return new Promise(((Bb, Ob) => {
        Wb({
          data: new Int8Array(bb.buffer, bb.byteOffset, bb.byteLength).slice(),
          attributeIds: ub,
          expected: hb,
          resolve: Bb,
          reject: Ob
        })
      }))
    }
    var db = hb(37096),
      rb = hb(37110),
      jb = hb(9170),
      nb = hb(9163);
    const Db = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function xb(bb) {
      const ub = (0, nb.i)(bb.byteLength);
      if (ub) throw new jb.p(ub);
      const {
        json: hb,
        bin: Bb
      } = (0, jb.B)(bb), Ob = (0, nb.e)(hb, Bb);
      if (Ob) throw new jb.p(Ob);
      try {
        return function(bb, ub) {
          var hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb, wb, Zb, Xb, pb, ob;
          const Ab = new Map,
            lb = hb => {
              let Bb = Ab.get(hb);
              if (!Bb) {
                var Ob;
                const Gb = bb.bufferViews[hb],
                  Ub = null !== (Ob = Gb.byteOffset) && void 0 !== Ob ? Ob : 0;
                Bb = {
                  index: hb,
                  bytes: ub.subarray(Ub, Ub + Gb.byteLength),
                  byteStride: Gb.byteStride
                }, Ab.set(hb, Bb)
              }
              return Bb
            },
            Kb = new Map,
            Wb = ub => {
              let hb = Kb.get(ub);
              if (!hb) {
                var Bb;
                const Ob = bb.accessors[ub];
                hb = {
                  index: ub,
                  count: Ob.count,
                  type: Ob.type,
                  numComponents: jb.s[Ob.type],
                  componentType: Ob.componentType,
                  normalized: null !== (Bb = Ob.normalized) && void 0 !== Bb && Bb,
                  byteOffset: Ob.byteOffset,
                  bufferView: void 0 === Ob.bufferView ? null : lb(Ob.bufferView),
                  min: Ob.min,
                  max: Ob.max
                }, Kb.set(ub, hb)
              }
              return hb
            },
            Cb = null !== (hb = null === (Bb = bb.extensionsUsed) || void 0 === Bb ? void 0 : Bb.includes("KHR_draco_mesh_compression")) && void 0 !== hb && hb,
            db = (null !== (Ob = bb.meshes) && void 0 !== Ob ? Ob : []).map(((ub, hb) => {
              const Bb = ub.primitives.map(((ub, hb) => {
                var Bb, Ob, Gb;
                const Ub = Cb ? null === (Bb = ub.extensions) || void 0 === Bb ? void 0 : Bb.KHR_draco_mesh_compression : void 0;
                let Lb = null;
                const Yb = [];
                if (Ub) {
                  const hb = {
                    vertices: bb.accessors[ub.attributes.POSITION].count,
                    indices: void 0 === ub.indices ? 0 : bb.accessors[ub.indices].count,
                    components: {}
                  };
                  Lb = {
                    bufferView: lb(Ub.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: hb
                  };
                  for (const [Bb, Ob] of jb.l) {
                    const Gb = Ub.attributes[Bb];
                    if (void 0 === Gb) continue;
                    Lb.attributeIds[Ob] = Gb;
                    const Yb = ub.attributes[Bb];
                    var Sb;
                    if (void 0 !== Yb) Lb.normalized[Ob] = null !== (Sb = bb.accessors[Yb].normalized) && void 0 !== Sb && Sb, hb.components[Ob] = jb.s[bb.accessors[Yb].type]
                  }
                } else
                  for (const [bb, ab] of jb.l) {
                    const hb = ub.attributes[bb];
                    void 0 !== hb && Yb.push({
                      semantic: bb,
                      kind: ab,
                      accessor: Wb(hb)
                    })
                  }
                return {
                  index: hb,
                  mode: null !== (Ob = ub.mode) && void 0 !== Ob ? Ob : 4,
                  attributes: Yb,
                  indices: Ub || void 0 === ub.indices ? null : Wb(ub.indices),
                  position: void 0 === ub.attributes.POSITION ? null : Wb(ub.attributes.POSITION),
                  material: null !== (Gb = ub.material) && void 0 !== Gb ? Gb : null,
                  draco: Lb
                }
              }));
              return {
                index: hb,
                name: ub.name,
                primitives: Bb,
                extras: ub.extras
              }
            })),
            rb = (null !== (Gb = bb.nodes) && void 0 !== Gb ? Gb : []).map(((bb, ub) => {
              var hb, Bb;
              return {
                index: ub,
                name: bb.name,
                children: null !== (hb = bb.children) && void 0 !== hb ? hb : [],
                mesh: null !== (Bb = bb.mesh) && void 0 !== Bb ? Bb : null,
                translation: bb.translation,
                rotation: bb.rotation,
                scale: bb.scale,
                hasCamera: void 0 !== bb.camera,
                extras: bb.extras
              }
            })),
            nb = null !== (Ub = null === (Lb = bb.extensionsUsed) || void 0 === Lb ? void 0 : Lb.includes("KHR_materials_unlit")) && void 0 !== Ub && Ub,
            xb = null !== (Yb = null === (Sb = bb.extensionsUsed) || void 0 === Sb ? void 0 : Sb.includes("KHR_texture_transform")) && void 0 !== Yb && Yb,
            zb = (null !== (ab = bb.materials) && void 0 !== ab ? ab : []).map(((bb, ub) => {
              var hb, Bb, Ob, Gb;
              const Ub = bb.pbrMetallicRoughness,
                Lb = null === Ub || void 0 === Ub ? void 0 : Ub.baseColorTexture;
              return {
                index: ub,
                name: bb.name,
                extras: bb.extras,
                unlit: nb && void 0 !== (null === (hb = bb.extensions) || void 0 === hb ? void 0 : hb.KHR_materials_unlit),
                pbr: Ub ? {
                  baseColorFactor: Ub.baseColorFactor,
                  metallicFactor: Ub.metallicFactor,
                  roughnessFactor: Ub.roughnessFactor
                } : null,
                baseColorTexture: Lb ? {
                  texture: Lb.index,
                  transform: xb && (null === (Bb = Lb.extensions) || void 0 === Bb ? void 0 : Bb.KHR_texture_transform) || null
                } : null,
                emissiveFactor: bb.emissiveFactor,
                alphaMode: null !== (Ob = bb.alphaMode) && void 0 !== Ob ? Ob : "OPAQUE",
                alphaCutoff: bb.alphaCutoff,
                doubleSided: null !== (Gb = bb.doubleSided) && void 0 !== Gb && Gb
              }
            })),
            gb = (null !== (Hb = bb.textures) && void 0 !== Hb ? Hb : []).map(((ub, hb) => {
              var Bb, Ob;
              const Gb = void 0 === ub.sampler ? Db : {
                index: ub.sampler,
                ...null === (Bb = bb.samplers) || void 0 === Bb ? void 0 : Bb[ub.sampler]
              };
              return {
                index: hb,
                sampler: {
                  index: Gb.index,
                  magFilter: Gb.magFilter,
                  minFilter: Gb.minFilter,
                  wrapS: Gb.wrapS,
                  wrapT: Gb.wrapT
                },
                image: null !== (Ob = ub.source) && void 0 !== Ob ? Ob : -1
              }
            })),
            ib = (null !== (wb = bb.images) && void 0 !== wb ? wb : []).map(((bb, ub) => ({
              index: ub,
              name: bb.name,
              mimeType: bb.mimeType,
              bufferView: lb(bb.bufferView)
            }))),
            vb = null !== (Zb = (0, jb.z)(bb)) && void 0 !== Zb ? Zb : 0;
          return {
            json: bb,
            rootNodes: null !== (Xb = null === (pb = bb.scenes) || void 0 === pb || null === (ob = pb[vb]) || void 0 === ob ? void 0 : ob.nodes) && void 0 !== Xb ? Xb : [],
            nodes: rb,
            meshes: db,
            materials: zb,
            textures: gb,
            images: ib
          }
        }(hb, Bb)
      } catch (Gb) {
        throw Gb instanceof jb.n ? Gb : new jb.n(`reading the GLB failed: ${Gb instanceof Error?Gb.message:String(Gb)}`)
      }
    }
    async function zb(bb, ub) {
      var hb, Bb;
      const Ob = bb.draco;
      if (!Ob) throw new jb.n("not a Draco primitive");
      let Gb;
      try {
        Gb = await ub(Ob.bufferView.bytes, Ob.attributeIds, Ob.expected)
      } catch (Sb) {
        throw new jb.n(`Draco decoding failed: ${Sb instanceof Error?Sb.message:String(Sb)}`)
      }
      const {
        vertices: Ub,
        indices: Lb,
        components: Yb
      } = Ob.expected;
      if (Gb.totalVertices !== Ub || (null !== (hb = null === (Bb = Gb.indices) || void 0 === Bb ? void 0 : Bb.length) && void 0 !== hb ? hb : 0) !== Lb || Gb.attributes.some((bb => bb.size !== Yb[bb.kind] || bb.data.length !== Ub * bb.size))) throw new jb.n("Draco decoding gave other counts than the accessors declare");
      for (const ab of Gb.attributes) {
        const bb = Ob.normalized[ab.kind];
        void 0 !== bb && (ab.normalized = bb)
      }
      return Gb
    }
    const gb = new WeakMap;

    function ib(bb, ub) {
      var hb;
      const Bb = null !== (hb = gb.get(bb)) && void 0 !== hb ? hb : ub(bb);
      return gb.set(bb, Bb), Bb
    }

    function vb(bb) {
      const ub = bb.bufferView,
        hb = 5125 === bb.componentType ? Uint32Array : Uint16Array,
        Bb = ub.bytes.buffer,
        Ob = ub.bytes.byteOffset + (bb.byteOffset || 0);
      return Ob % hb.BYTES_PER_ELEMENT !== 0 ? new hb(Bb.slice(Ob, Ob + bb.count * hb.BYTES_PER_ELEMENT), 0) : new hb(Bb, Ob, bb.count)
    }

    function tb(bb, ub) {
      if (bb.min && bb.max) return [new Float64Array(bb.min), new Float64Array(bb.max)];
      const hb = ub.find((bb => {
          let {
            kind: ub
          } = bb;
          return "position" === ub
        })),
        Bb = hb ? (0, rb.j)(hb, bb.count) : new Float32Array(0);
      return (0, rb.t)(Bb.length / 3, ((bb, ub) => Bb[3 * bb + ub]))
    }

    function Jb(bb) {
      const ub = bb.attributes.map((bb => {
          var ub, hb;
          let {
            kind: Bb,
            accessor: Ob
          } = bb;
          const {
            bufferView: Gb,
            numComponents: Ub
          } = Ob;
          if (!Gb) {
            return {
              kind: Bb,
              data: ib(Ob, (() => new Float32Array(Ub * Ob.count))),
              offset: 0,
              stride: 4 * Ub,
              components: Ub,
              glType: 5126,
              isNormalized: !1
            }
          }
          const Lb = null !== (ub = Gb.byteStride) && void 0 !== ub ? ub : Ub * jb.d[Ob.componentType];
          return {
            kind: Bb,
            data: Gb.bytes,
            offset: null !== (hb = Ob.byteOffset) && void 0 !== hb ? hb : 0,
            stride: Lb,
            components: Ub,
            glType: Ob.componentType,
            isNormalized: Ob.normalized
          }
        })),
        hb = bb.indices,
        Bb = hb && ib(hb, vb),
        Ob = bb.position;
      return new rb.h(ub, Bb, Ob.count, ...tb(Ob, ub))
    }
    const eb = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function Nb(bb, ub) {
      const hb = ub.attributes.map((bb => {
        let {
          kind: ub,
          data: hb,
          size: Bb,
          byteOffset: Ob,
          byteStride: Gb,
          normalized: Ub
        } = bb;
        return {
          kind: ub,
          data: hb,
          offset: Ob,
          stride: Gb,
          components: Bb,
          glType: 5120 + eb.indexOf(hb.constructor),
          isNormalized: Ub
        }
      }));
      return new rb.h(hb, ub.indices, ub.totalVertices, ...tb(bb.position, hb))
    }

    function sb(bb) {
      const ub = bb.lastIndexOf("/");
      return ub < 0 ? bb : bb.substring(ub + 1)
    }

    function Mb(bb) {
      const ub = bb.lastIndexOf("/");
      return ub < 0 ? "" : bb.substring(0, ub + 1)
    }

    function mb(bb) {
      return bb.name || `node${bb.index}`
    }
    const Ib = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      Pb = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      qb = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function Eb(bb) {
      var ub, hb, Bb, Ob;
      const Gb = null !== (ub = bb.minFilter) && void 0 !== ub ? ub : 9987;
      return 9729 === (null !== (hb = bb.magFilter) && void 0 !== hb ? hb : 9729) ? null !== (Bb = Pb[Gb]) && void 0 !== Bb ? Bb : 3 : null !== (Ob = qb[Gb]) && void 0 !== Ob ? Ob : 4
    }
    const yb = {
      33071: 0,
      33648: 2
    };

    function Vb(bb) {
      var ub;
      return null !== (ub = yb[null !== bb && void 0 !== bb ? bb : 10497]) && void 0 !== ub ? ub : 1
    }

    function Fb(bb) {
      return 9728 === bb.minFilter || 9729 === bb.minFilter
    }

    function fb(bb) {
      var ub, hb, Bb;
      const Ob = Float64Array.from(null !== (ub = bb.scale) && void 0 !== ub ? ub : [1, 1, 1]);
      return bb.hasCamera && (Ob[0] = -1), {
        translation: Float64Array.from(null !== (hb = bb.translation) && void 0 !== hb ? hb : [0, 0, 0]),
        rotation: Float64Array.from(null !== (Bb = bb.rotation) && void 0 !== Bb ? Bb : [0, 0, 0, 1]),
        scale: Ob
      }
    }

    function kb(bb, ub) {
      let {
        translation: hb,
        rotation: Bb,
        scale: Ob
      } = bb;
      const Gb = new Float32Array(16);
      return (0, db.b)(Ob, 0, Bb, 0, hb, 0, Gb), ub && (0, db.o)(Gb, ub, 0, Gb), Gb
    }
    class Tb {
      constructor(bb, ub, hb, Bb) {
        this.model = bb, this.decode = ub, this.fileInfo = hb, this.uniqueRootUrl = Bb, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const Ob = new Set,
          Gb = (ub, hb) => {
            const Bb = bb.nodes[ub];
            if (this.parents.has(Bb)) throw new jb.n(`/nodes/${ub}: Invalid recursive node hierarchy`);
            this.parents.set(Bb, hb);
            const Ub = null === Bb.mesh ? [] : bb.meshes[Bb.mesh].primitives,
              Lb = Ub.map((bb => {
                const ub = Ub.length > 1;
                return {
                  name: ub ? `${mb(Bb)}_primitive${bb.index}` : mb(Bb),
                  node: Bb,
                  primitive: bb,
                  part: ub,
                  geometry: null
                }
              }));
            this.uses.set(Bb, Lb);
            const Yb = null !== Bb.mesh && Ob.has(Bb.mesh);
            Ob.add(Bb.mesh), this.own.set(Bb, Yb ? [] : Lb);
            for (const bb of Bb.children) Gb(bb, Bb)
          };
        for (const Ub of bb.rootNodes) Gb(Ub, null);
        this.primitives = bb.nodes.flatMap((bb => {
          var ub;
          return null !== (ub = this.own.get(bb)) && void 0 !== ub ? ub : []
        }))
      }
      decodeGeometries() {
        const bb = new Map;
        return Promise.all(this.primitives.map((async ub => {
          const {
            primitive: hb
          } = ub, Bb = hb.draco;
          let Ob = Bb ? bb.get(Bb.bufferView.index) : Promise.resolve(Jb(hb));
          Ob || (Ob = zb(hb, this.decode).then((bb => Nb(hb, bb))), bb.set(Bb.bufferView.index, Ob)), ub.geometry = await Ob
        })))
      }
      parentOf(bb) {
        var ub;
        return null !== (ub = this.parents.get(bb)) && void 0 !== ub ? ub : null
      }
      meshesUnder(bb) {
        const ub = this.model.nodes.filter((bb => this.uses.has(bb)));
        for (const Bb of ub) {
          const ub = this.uses.get(Bb),
            hb = ub.find((ub => ub.name === bb));
          if (hb) return 1 === ub.length ? this.subtree(Bb) : this.own.get(Bb).includes(hb) ? [hb] : []
        }
        const hb = ub.find((ub => 1 !== this.uses.get(ub).length && mb(ub) === bb));
        return hb ? this.subtree(hb) : null
      }
      subtree(bb) {
        return [...this.own.get(bb), ...bb.children.flatMap((bb => this.subtree(this.model.nodes[bb])))]
      }
      worldMatrix(bb, ub, hb) {
        let Bb = kb(fb(ub ? Ib : {}), null);
        const Ob = [];
        for (let Ub = bb.part ? bb.node : this.parentOf(bb.node); Ub; Ub = this.parentOf(Ub)) Ob.unshift(Ub);
        for (const Ub of Ob) Bb = kb(fb(Ub), Bb);
        const Gb = fb(bb.part ? {} : bb.node);
        return void 0 !== hb && Gb.scale.fill(hb), kb(Gb, Bb)
      }
      floats(bb) {
        const {
          vertexAttributes: ub,
          vertexCount: hb
        } = bb.geometry;
        return new Map(ub.map((bb => [bb.kind, (0, rb.j)(bb, hb)])))
      }
      imageUrl(bb) {
        return function(bb, ub, hb) {
          let {
            name: Bb
          } = ub;
          return `data:${bb}${Bb}#image${hb}`
        }(this.uniqueRootUrl, this.fileInfo, bb)
      }
      textureDesc(bb, ub) {
        var hb;
        let {
          texture: Bb,
          transform: Ob
        } = bb;
        const {
          sampler: Gb,
          image: Ub
        } = this.model.textures[Bb], {
          bufferView: Lb,
          mimeType: Yb,
          name: Sb
        } = this.model.images[Ub], ab = Ob && {
          ...Ob.offset ? {
            uOffset: Ob.offset[0],
            vOffset: Ob.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...Ob.rotation ? {
            wAng: -Ob.rotation
          } : {},
          ...Ob.scale ? {
            uScale: Ob.scale[0],
            vScale: Ob.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(Ub),
          noMipmap: Fb(Gb),
          invertY: !1,
          samplingMode: Eb(Gb),
          data: {
            bytes: Lb.bytes,
            mimeType: Yb,
            label: Sb,
            context: `/textures/${Bb}`
          },
          sets: {
            wrapU: Vb(Gb.wrapS),
            wrapV: Vb(Gb.wrapT),
            ...ab,
            coordinatesIndex: null !== (hb = null === Ob || void 0 === Ob ? void 0 : Ob.texCoord) && void 0 !== hb ? hb : 0,
            hasAlpha: ub
          }
        }
      }
    }
    async function cb(bb, ub, hb, Bb, Ob, Gb) {
      let Ub = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const Lb = function(bb, ub, hb) {
          return "string" !== typeof ub ? {
            url: "",
            rootUrl: bb,
            name: hb()
          } : ub ? ub.startsWith("data:") ? {
            url: ub,
            rootUrl: bb,
            name: ""
          } : bb ? {
            url: bb + ub,
            rootUrl: bb,
            name: ub
          } : {
            url: ub,
            rootUrl: Mb(ub),
            name: sb(ub)
          } : {
            url: bb,
            rootUrl: Mb(bb),
            name: sb(bb)
          }
        }(hb, bb, Ob),
        Yb = {};
      ub.addPendingData(Yb);
      try {
        const hb = xb(await async function(bb, ub) {
            return "string" !== typeof ub ? ub : bb.url.startsWith("data:") ? (0, jb.t)(bb.url) : await (0, jb.w)(bb.url)
          }(Lb, bb)),
          Yb = new Tb(hb, Bb, Lb, function(bb, ub) {
            let {
              rootUrl: hb,
              name: Bb
            } = bb;
            return !hb.startsWith("file:") && Bb ? hb : `${hb}${ub()}/`
          }(Lb, Ob));
        return await Gb(Yb), ub.importedMeshesFiles && (ub.loadingPluginName = "yJ", Ub && ub.importedMeshesFiles.push(Lb.url)), Yb
      } finally {
        ub.removePendingData(Yb)
      }
    }
    var Qb = hb(37217),
      Rb = hb(37077),
      bu = hb(37492);

    function uu(bb) {
      if (null === bb || void 0 === bb || !bb.min || !bb.max) return null;
      const [ub, hb, Bb] = bb.min, [Ob, Gb, Ub] = bb.max, {
        BoundingInfo: Lb,
        YX: Yb
      } = (0, Qb.e)();
      return new Lb(new Yb(ub, hb, Bb), new Yb(Ob, Gb, Ub))
    }

    function hu(bb) {
      (0, Rb.g)(bb) || (bb.geometry && bb.geometry.useBoundingInfoFromGeometry ? bb._updateBoundingInfo() : bb.refreshBoundingInfo(!0, !0))
    }
    class Bu {
      constructor(bb, ub) {
        this.Xp = bb, this.decode = ub, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(bb) {
        let ub = this.viewData.get(bb.index);
        return ub || (ub = this.bufferData.then((() => bb.bytes)), this.viewData.set(bb.index, ub)), ub
      }
      viewBuffer(bb) {
        let ub = this.viewBuffers.get(bb.index);
        return ub || (ub = this.viewBytes(bb).then((bb => new((0, Qb.e)().VZ)(this.Xp.UX(), bb, !1))), this.viewBuffers.set(bb.index, ub)), ub
      }
      vertexBuffer(bb, ub) {
        const {
          kind: hb,
          data: Bb
        } = ub, Ob = `${bb.index}:${hb}`;
        let Gb = this.vertexBuffers.get(Ob);
        if (!Gb) {
          const Ub = bb.bufferView;
          Gb = Ub ? this.viewBuffer(Ub).then((bb => this.layoutVertexBuffer(bb, ub))) : Promise.resolve(Bb).then((bb => new((0, Qb.e)().VertexBuffer)(this.Xp.UX(), bb, hb, !1))), this.vertexBuffers.set(Ob, Gb)
        }
        return Gb
      }
      layoutVertexBuffer(bb, ub) {
        let {
          kind: hb,
          offset: Bb,
          stride: Ob,
          components: Gb,
          glType: Ub,
          isNormalized: Lb
        } = ub;
        const Yb = this.Xp.UX();
        return new((0, Qb.e)().VertexBuffer)(Yb, bb, hb, !1, void 0, Ob, void 0, Bb, Gb, Ub, Lb, !0, void 0, !0)
      }
      load(bb, ub, hb) {
        const Bb = (0, Rb.g)(hb),
          Ob = bb => {
            Bb || (hb._delayInfo = hb._delayInfo || [], -1 === hb._delayInfo.indexOf(bb) && hb._delayInfo.push(bb))
          },
          Gb = ub.draco;
        if (Gb) {
          for (const bb in Gb.attributeIds) Ob(bb);
          let Ub = this.dracoGeometry.get(Gb.bufferView.index);
          return Ub || (Ub = this.viewBytes(Gb.bufferView).then((async () => {
            let Ob;
            try {
              Ob = await zb(ub, this.decode)
            } catch (Yb) {
              throw new jb.n(`${bb}: ${Yb instanceof Error?Yb.message:String(Yb)}`)
            }
            const Gb = Nb(ub, Ob);
            if (Bb) return Gb;
            const Ub = uu(ub.position),
              Lb = new((0, Qb.e)().MirroredGeometry)(hb.name, this.Xp);
            Ub && (Lb._boundingInfo = Ub, Lb.useBoundingInfoFromGeometry = !0), Gb.indexData && Lb.setIndices(Gb.indexData);
            for (const bb of Gb.vertexAttributes) Lb.setVerticesBuffer(this.layoutVertexBuffer(bb.data, bb), Gb.vertexCount);
            return Lb.link(Gb), Lb
          })), this.dracoGeometry.set(Gb.bufferView.index, Ub)), Ub
        }
        const Ub = [],
          Lb = Jb(ub);
        if (Bb) return hb.isUnIndexed = !Lb.indexData, hb.hasVertexAlpha = (0, bu.f)(ub), Promise.resolve(Lb);
        const Yb = new((0, Qb.e)().MirroredGeometry)(hb.name, this.Xp),
          {
            indexData: Sb
          } = Lb;
        Sb ? Ub.push(this.viewBytes(ub.indices.bufferView).then((() => {
          Yb.setIndices(Sb)
        }))) : hb.isUnIndexed = !0;
        for (const [ab, {
            kind: Hb,
            accessor: wb
          }] of ub.attributes.entries()) Ob(Hb), Ub.push(this.vertexBuffer(wb, Lb.vertexAttributes[ab]).then((bb => {
          if ("position" === bb.getKind()) {
            const bb = uu(wb);
            bb && (Yb._boundingInfo = bb, Yb.useBoundingInfoFromGeometry = !0)
          }
          Yb.setVerticesBuffer(bb, Lb.vertexCount)
        })));
        return (0, bu.f)(ub) && (hb.hasVertexAlpha = !0), Promise.all(Ub).then((() => (Yb.link(Lb), Yb)))
      }
    }
    var Ou, Gu = hb(36940),
      Uu = hb(36720),
      Lu = hb(37501),
      Yu = hb(36883),
      Su = hb(36928),
      au = hb(2560),
      Hu = hb(36911);

    function wu(bb, ub) {
      bb.metadata = bb.metadata || {};
      const hb = bb._internalMetadata = bb._internalMetadata || {},
        Bb = hb.yJ = hb.yJ || {};
      (Bb.pointers = Bb.pointers || []).push(ub)
    }

    function Zu(bb, ub) {
      if (ub && Object.keys(ub).length > 0) {
        const hb = bb.metadata = bb.metadata || {};
        (hb.yJ = hb.yJ || {}).extras = ub
      }
    }

    function Xu(bb, ub) {
      ub.position = bb.translation ? Uu.YX.FromArray(bb.translation) : Uu.YX.Zero(), ub.rotationQuaternion = bb.rotation ? Uu.Quaternion.FromArray(bb.rotation) : Uu.Quaternion.Identity(), ub.pa = bb.scale ? Uu.YX.FromArray(bb.scale) : Uu.YX.One()
    }
    class pu {
      constructor(bb, ub) {
        if (this.Xp = bb, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, ub) {
          const ub = bb.UX(),
            hb = bb.XN.add((() => {
              this.dispose()
            })),
            Bb = ub.onContextRestoredObservable.add((() => {
              for (const bb of [...this.geometries, ...this.meshes, ...this.textures]) bb._rebuild()
            }));
          this.release = () => {
            bb.XN.remove(hb), ub.onContextRestoredObservable.remove(Bb)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const bb of this.meshes) this.Xp.pBb(bb);
          for (const bb of this.materials) this.Xp.addMaterial(bb);
          for (const bb of this.geometries) this.Xp.addGeometry(bb);
          for (const bb of this.transformNodes) this.Xp.addTransformNode(bb);
          for (const bb of this.textures) this.Xp.addTexture(bb)
        }
      }
      dispose() {
        var bb;
        for (const ub of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const bb of ub.slice()) bb.dispose();
          ub.length = 0
        }
        null === (bb = this.release) || void 0 === bb || bb.call(this), this.release = null
      }
    }
    class ou {
      constructor(bb, ub, hb, Bb, Ob, Gb, Ub) {
        this.asset = bb, this.Xp = ub, this.tree = hb, this.geometryData = Ob, this.materials = Gb, this.lite = Ub, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = Bb ? hb : null
      }
      create(bb) {
        if (this.lite) return bb();
        const ub = this.Xp;
        ub._blockEntityCollection = !!this.container;
        try {
          const ub = bb();
          return this.container && (ub._parentContainer = this.container), ub
        } finally {
          ub._blockEntityCollection = !1
        }
      }
      node(bb, ub) {
        return this.create((() => this.lite ? ub ? (0, Lu.f)(this.lite, bb) : (0, Lu.n)(this.lite, bb) : ub ? new((0, Qb.e)().Mesh)(bb, this.Xp) : new((0, Qb.e)().TransformNode)(bb, this.Xp)))
      }
      async load() {
        var bb;
        this.asset.model.json.nodes && this.createRoot();
        const ub = this.lite ? null : this.Xp,
          hb = null !== (bb = null === ub || void 0 === ub ? void 0 : ub.blockMaterialDirtyMechanism) && void 0 !== bb && bb;
        let Bb;
        ub && (ub.blockMaterialDirtyMechanism = !0);
        try {
          Bb = this.loadScene()
        } finally {
          null === ub || void 0 === ub || ub._forceBlockMaterialDirtyMechanism(hb)
        }
        await Bb;
        const {
          root: Ob,
          tree: Gb
        } = this;
        Ob && (Ob.Zx(!0), Gb.meshes.push(Ob), Gb.rootNodes.push(Ob));
        for (const Lb of this.asset.model.nodes) {
          const bb = this.nodeObjects.get(Lb.index);
          bb && ["TransformNode", "LiteNode"].includes(bb.getClassName()) && Gb.transformNodes.push(bb);
          for (const ub of null !== (Ub = this.nodePrimitives.get(Lb.index)) && void 0 !== Ub ? Ub : []) {
            var Ub;
            Gb.meshes.push(ub);
            const bb = ub.geometry;
            bb && !Gb.geometries.includes(bb) && Gb.geometries.push(bb)
          }
        }
      }
      createRoot() {
        const bb = this.node("__root__", !0);
        this.root = bb, bb.Zx(!1), this.Xp.useRightHandedSystem || Xu(Ib, bb)
      }
      loadScene() {
        const bb = [];
        for (const ub of this.asset.model.rootNodes) bb.push(this.loadNode(this.asset.model.nodes[ub], (bb => {
          bb.parent = this.root
        })));
        return bb.push(Promise.resolve()), Promise.all(bb).then((() => {}))
      }
      loadNode(bb, ub) {
        const hb = `/nodes/${bb.index}`,
          Bb = [],
          Ob = Ob => {
            if (wu(Ob, hb), Xu(bb, Ob), bb.hasCamera && !this.Xp.useRightHandedSystem) {
              const {
                pa: bb
              } = Ob;
              bb.set(-1, bb.y, bb.z)
            }
            for (const ub of bb.children) Bb.push(this.loadNode(this.asset.model.nodes[ub], (bb => {
              bb.parent = Ob
            })));
            (hb => {
              Zu(hb, bb.extras), ub(hb)
            })(Ob)
          };
        if (null === bb.mesh) {
          const ub = this.node(mb(bb), !1);
          this.nodeObjects.set(bb.index, ub), Ob(ub)
        } else {
          const ub = this.asset.model.meshes[bb.mesh];
          Bb.push(this.loadMesh(`/meshes/${ub.index}`, bb, ub, Ob))
        }
        return Promise.all(Bb).then((() => {
          for (const hb of null !== (ub = this.nodePrimitives.get(bb.index)) && void 0 !== ub ? ub : []) {
            var ub;
            hu(hb)
          }
          return this.nodeObjects.get(bb.index)
        }))
      }
      loadMesh(bb, ub, hb, Bb) {
        const Ob = [],
          Gb = mb(ub);
        if (1 === hb.primitives.length) {
          const Bb = hb.primitives[0];
          Ob.push(this.loadPrimitive(`${bb}/primitives/${Bb.index}`, Gb, Bb, (bb => {
            this.nodeObjects.set(ub.index, bb), this.nodePrimitives.set(ub.index, [bb])
          })))
        } else {
          const Bb = this.node(Gb, !1);
          this.nodeObjects.set(ub.index, Bb);
          const Ub = [];
          this.nodePrimitives.set(ub.index, Ub);
          for (const ub of hb.primitives) Ob.push(this.loadPrimitive(`${bb}/primitives/${ub.index}`, `${Gb}_primitive${ub.index}`, ub, (bb => {
            bb.parent = Bb, Ub.push(bb)
          })))
        }
        const Ub = this.nodeObjects.get(ub.index);
        return Bb(Ub), Promise.all(Ob).then((() => Ub))
      }
      loadPrimitive(bb, ub, hb, Bb) {
        const Ob = [],
          Gb = this.node(ub, !0);
        if (Gb.sideOrientation = this.Xp.useRightHandedSystem ? Yu.b.CounterClockWiseSideOrientation : Yu.b.ClockWiseSideOrientation, Ob.push(this.geometryData.load(bb, hb, Gb).then((bb => {
            if ((0, Rb.g)(Gb)) {
              var ub, hb;
              const Bb = bb;
              Gb.replaceModel(Bb, Int32Array.of(0, null !== (ub = null === (hb = Bb.indexData) || void 0 === hb ? void 0 : hb.length) && void 0 !== ub ? ub : Bb.vertexCount, 0, Bb.vertexCount))
            } else this.create((() => (bb.applyToMesh(Gb), bb)))
          }))), this.materials) {
          const bb = 0 === hb.mode ? Yu.b.PointListDrawMode : Yu.b.TriangleFillMode,
            ub = null === hb.material ? null : this.asset.model.materials[hb.material];
          Ob.push(this.loadMaterial(ub, bb, (bb => {
            Gb.material = bb
          })))
        }
        return wu(Gb, bb), Bb(Gb), Promise.all(Ob).then((() => Gb))
      }
      loadMaterial(bb, ub, hb) {
        var Bb;
        const Ob = `${null!==(Bb=null===bb||void 0===bb?void 0:bb.index)&&void 0!==Bb?Bb:"default"}:${ub}`;
        let Gb = this.materialData.get(Ob);
        return Gb || (Gb = this.createMaterial(bb, ub), this.materialData.set(Ob, Gb)), hb(Gb.material), Gb.promise
      }
      createMaterial(bb, ub) {
        const hb = bb ? bb.name || `material${bb.index}` : "__GLTFLoader._default",
          {
            style: Bb,
            unlit: Ob
          } = this.materials;
        let Gb;
        const Ub = this.create((() => {
          const Ub = (0, Hu.b)({
            name: hb,
            Xp: this.Xp,
            sets: {
              ...(0, bu.d)(this.asset, bb, Bb, Ob),
              fillMode: ub
            },
            unrendered: !0
          });
          return Gb = Ub.model, Ub.mirror
        }));
        let Lb = Promise.resolve();
        if (bb) {
          const ub = `/materials/${bb.index}`,
            Bb = Gb.diffuseTexture;
          if (Bb && !Bb.mirror) Lb = new Promise((bb => setTimeout(bb)));
          else if (Bb) {
            const Ob = Bb.mirror;
            Ob._parentContainer = this.container, Ob.name = `${hb} (Base Color)`, wu(Ob, `${ub}${bb.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(Ob), Lb = (0, Su.u)(Bb)
          }
          Zu(Ub, bb.extras), wu(Ub, ub)
        }
        return this.tree.materials.push(Ub), {
          material: Ub,
          promise: Lb
        }
      }
    }

    function Au() {
      Gu.f.dracoDecodes = pb.decodes, Gu.f.dracoWorkersStarted = pb.workersStarted, Gu.f.dracoMostWorkers = pb.mostWorkers
    }
    async function lu(bb, ub, hb, Ob, Gb) {
      try {
        return await async function(bb, ub, hb, Ob, Gb, Ub) {
          var Lb;
          let Yb;
          const Sb = null === (Lb = (0, au.g)()) || void 0 === Lb ? void 0 : Lb.xX,
            ab = null !== Sb && void 0 !== Sb && Sb.zX && ub === Sb.ZN() ? Sb : null,
            Hb = Gb && !ab;
          return await cb(bb, ub, hb, Ob, Bb.d, (bb => (Yb = new pu(ub, Hb), new ou(bb, ub, Yb, Hb, new Bu(ub, Ob), Ub, ab).load())), !Gb), Yb
        }(bb, ub, hb, Cb, Ob, Gb)
      } finally {
        Au()
      }
    }
    async function Ku(bb, ub, hb, Ob) {
      try {
        return await cb(bb, ub, hb, Cb, Bb.d, (bb => Ob(bb, new Bu(ub, Cb))))
      } finally {
        Au()
      }
    }
    Ou = Ob.b, ab || (ab = {
      scriptUrl: new URL(Ou.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(Ou.wasmBinaryUrl, location.href).href
    })
  },
  40945: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub
    });
    var Bb = hb(115),
      Ob = hb(1108);

    function Gb(bb) {
      return (0, Bb.d)() ? `https://${Ob.b.discordDomain}/${bb.href}` : bb.href
    }
    const Ub = {
      scriptUrl: Gb(new hb.U(hb(40950))),
      wasmBinaryUrl: Gb(new hb.U(hb(40956)))
    }
  },
  35898: bb => {
    bb.exports = function(bb, ub, hb, Bb) {
      var Ob = self || window;
      try {
        try {
          var Gb;
          try {
            Gb = new Ob.Blob([bb])
          } catch (Sb) {
            (Gb = new(Ob.BlobBuilder || Ob.WebKitBlobBuilder || Ob.MozBlobBuilder || Ob.MSBlobBuilder)).append(bb), Gb = Gb.getBlob()
          }
          var Ub = Ob.URL || Ob.webkitURL,
            Lb = Ub.createObjectURL(Gb),
            Yb = new Ob[ub](Lb, hb);
          return Ub.revokeObjectURL(Lb), Yb
        } catch (Sb) {
          return new Ob[ub]("data:application/javascript,".concat(encodeURIComponent(bb)), hb)
        }
      } catch (Sb) {
        if (!Bb) throw Error("Inline worker is not supported");
        return new Ob[ub](Bb, hb)
      }
    }
  },
  40950: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  40956: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);