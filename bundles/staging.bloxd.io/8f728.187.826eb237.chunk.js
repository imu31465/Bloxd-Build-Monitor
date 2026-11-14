export const id = 187;
export const ids = [187];
export const modules = {
  39452: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      loadGlbAsset: () => SB,
      loadGlbTree: () => tn
    });
    var Vc = nc(36472),
      Ic = nc(39457),
      rB = nc(35009),
      uc = nc.n(rB);

    function sc() {
      return uc()('(()=>{class cB extends Error{}function Bc(Bc,nc){const Vc=Bc._malloc(nc);if(0===Vc)throw new cB(`Draco: the decoder\'s heap refused ${nc} bytes`);return Vc}function nc(cB){return{[cB.DT_FLOAT32]:[Float32Array,5126],[cB.DT_INT8]:[Int8Array,5120],[cB.DT_INT16]:[Int16Array,5122],[cB.DT_INT32]:[Int32Array,5124],[cB.DT_UINT8]:[Uint8Array,5121],[cB.DT_UINT16]:[Uint16Array,5123],[cB.DT_UINT32]:[Uint32Array,5125]}}function Vc(Bc,Vc,Ic,rB,uc){let sc=null,Mc=null,Pc=null;try{sc=new Bc.Decoder,Mc=new Bc.DecoderBuffer,Mc.Init(Vc,Vc.byteLength);let qB=0;const Oc=sc.GetEncodedGeometryType(Mc);if(Oc===Bc.TRIANGULAR_MESH){const nc=new Bc.Mesh;Pc=nc;const Vc=sc.DecodeBufferToMesh(Mc,nc);if(!Vc.ok()||0===nc.ptr)throw new cB(Vc.error_msg());qB=3*nc.num_faces()}else{if(Oc!==Bc.POINT_CLOUD)throw new cB(`Draco: Cannot decode invalid geometry type ${Oc}`);{const nc=new Bc.PointCloud;Pc=nc;const Vc=sc.DecodeBufferToPointCloud(Mc,nc);if(!Vc.ok()||!nc.ptr)throw new cB(Vc.error_msg())}}const Tc=Pc.num_points();if(Tc!==rB.vertices||qB!==rB.indices)throw new cB(`Draco: decoded ${Tc} vertices and ${qB} indices, the accessors declare ${rB.vertices} and ${rB.indices}`);const fc=nc(Bc),mB=[];for(const{kind:Bc,id:nc,components:Vc}of Ic){const Ic=sc.GetAttributeByUniqueId(Pc,nc);if(!Ic||0===Ic.ptr)throw new cB(`Draco: no attribute with id ${nc} (${Bc})`);const rB=Ic.data_type();if(!fc[rB])throw new cB(`Draco: Cannot decode invalid data type ${rB}`);if(Ic.num_components()!==Vc)throw new cB(`Draco: ${Bc} decodes to ${Ic.num_components()} components, its accessor declares ${Vc}`);mB.push([Bc,Ic,rB])}return uc({dracoDecoder:sc,geometry:Pc,triangles:Oc===Bc.TRIANGULAR_MESH,numPoints:Tc,numIndices:qB,attributes:mB})}finally{Pc&&Bc.destroy(Pc),Mc&&Bc.destroy(Mc),sc&&Bc.destroy(sc)}}const Ic=self;let rB=null;self.onmessage=cB=>{let{data:uc}=cB;if("init"===uc.id){try{importScripts(uc.url),rB=DracoDecoderModule({wasmBinary:uc.wasmBinary}),Ic.postMessage({id:"initDone"})}catch(Oc){Ic.postMessage({id:"initError",message:Oc instanceof Error?Oc.message:String(Oc)})}return}const{seq:sc,data:Mc,attributeIds:Pc,expected:qB}=uc;rB?rB.then((cB=>{try{const rB=function(cB,Ic,rB,uc){const sc=Object.keys(rB).map((cB=>({kind:cB,id:rB[cB],components:uc.components[cB]})));return Vc(cB,Ic,sc,uc,(Vc=>{let{dracoDecoder:Ic,geometry:rB,triangles:uc,numPoints:sc,numIndices:Mc,attributes:Pc}=Vc;const qB=nc(cB);let Oc=null;if(uc){const nc=4*Mc,Vc=Bc(cB,nc);try{Ic.GetTrianglesUInt32Array(rB,nc,Vc),Oc=new Uint32Array(Mc),Oc.set(new Uint32Array(cB.HEAPF32.buffer,Vc,Mc))}finally{cB._free(Vc)}}const Tc=[];for(const[nc,fc,mB]of Pc){const[Vc]=qB[mB],uc=fc.num_components(),Mc=sc*uc,Pc=Mc*Vc.BYTES_PER_ELEMENT,Oc=Bc(cB,Pc);try{Ic.GetAttributeDataArrayForAllPoints(rB,fc,mB,Pc,Oc),Tc.push({kind:nc,data:new Vc(cB.HEAPF32.buffer,Oc,Mc).slice(),size:uc,byteOffset:fc.byte_offset(),byteStride:fc.byte_stride(),normalized:fc.normalized()})}finally{cB._free(Oc)}}return{indices:Oc,attributes:Tc,totalVertices:sc}}))}(cB,Mc,Pc,qB),uc=rB.attributes.map((cB=>cB.data.buffer));rB.indices&&uc.push(rB.indices.buffer),Ic.postMessage({id:"decoded",seq:sc,...rB},uc)}catch(Oc){Ic.postMessage({id:"decodeError",seq:sc,message:Oc instanceof Error?Oc.message:String(Oc)})}}),(cB=>{Ic.postMessage({id:"decodeError",seq:sc,message:cB instanceof Error?cB.message:String(cB)})})):Ic.postMessage({id:"decodeError",seq:sc,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, nc.p + "dracoDecode.worker.fbd05448.worker.js")
    }
    const Mc = 1e3;
    let Pc = null,
      qB = null;
    const Oc = [],
      Tc = [];
    let fc = 0;
    const mB = {
      decodes: 0,
      workersStarted: 0,
      mostWorkers: 0
    };

    function ec() {
      if (!Pc) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: cB,
        wasmBinaryUrl: Bc
      } = Pc;
      return qB ??= fetch(Bc).then((cB => {
        if (!cB.ok) throw new Error(`Draco: fetching ${Bc} failed: ${cB.status}`);
        return cB.arrayBuffer()
      })), qB.catch((() => {
        qB = null
      })), mB.workersStarted++, qB.then((Bc => new Promise(((nc, Vc) => {
        const Ic = new sc;
        Ic.onerror = cB => {
          Ic.onmessage = null, Ic.onerror = null, Ic.terminate(), Vc(new Error("Draco: the decode worker failed to start" + (cB.message ? `: ${cB.message}` : " (its script did not load)")))
        }, Ic.onmessage = cB => {
          let {
            data: Bc
          } = cB;
          Ic.onmessage = null, Ic.onerror = null, "initDone" === Bc.id ? nc(Ic) : (Ic.terminate(), Vc(new Error(`Draco: ${"initError"===Bc.id?Bc.message:"the worker did not start"}`)))
        };
        const rB = Bc.slice(0),
          uc = {
            id: "init",
            url: cB,
            wasmBinary: rB
          };
        Ic.postMessage(uc, [rB])
      }))))
    }

    function tB(cB) {
      const Bc = Oc.indexOf(cB); - 1 !== Bc && Oc.splice(Bc, 1);
      const nc = Tc.shift();
      nc && yB(nc)
    }

    function Sc(cB, Bc) {
      cB.busy = !0, cB.releaseTimer && (clearTimeout(cB.releaseTimer), cB.releaseTimer = null);
      cB.worker.then((nc => {
        const Vc = fc++;
        nc.onmessage = Ic => {
          let {
            data: rB
          } = Ic;
          if (("decoded" === rB.id || "decodeError" === rB.id) && rB.seq === Vc) {
            if (nc.onmessage = null, nc.onerror = null, "decoded" === rB.id) return mB.decodes++, Bc.resolve({
              indices: rB.indices,
              attributes: rB.attributes,
              totalVertices: rB.totalVertices
            }), void(() => {
              const Bc = Tc.shift();
              Bc ? Sc(cB, Bc) : (cB.busy = !1, cB.releaseTimer = setTimeout((() => {
                const Bc = Oc.indexOf(cB); - 1 !== Bc && Oc.splice(Bc, 1), cB.worker.then((cB => {
                  cB.terminate()
                }))
              }), Mc))
            })();
            nc.terminate(), Bc.reject(new Error(rB.message)), tB(cB)
          }
        }, nc.onerror = Vc => {
          nc.onmessage = null, nc.onerror = null, nc.terminate(), Bc.reject(new Error(`Draco: the decode worker failed: ${Vc.message}`)), tB(cB)
        };
        const Ic = {
          id: "decode",
          seq: Vc,
          data: Bc.data,
          attributeIds: Bc.attributeIds,
          expected: Bc.expected
        };
        nc.postMessage(Ic, [Bc.data.buffer])
      }), (nc => {
        Bc.reject(nc instanceof Error ? nc : new Error(String(nc))), tB(cB)
      }))
    }

    function yB(cB) {
      const Bc = Oc.find((cB => !cB.busy));
      if (Bc) Sc(Bc, cB);
      else {
        if (Oc.length < function() {
            const cB = "object" === typeof navigator ? navigator.hardwareConcurrency : 0;
            return cB ? Math.max(1, Math.min(Math.floor(.5 * cB), 4)) : 1
          }()) {
          const Bc = {
            worker: ec(),
            busy: !0,
            releaseTimer: null
          };
          return Oc.push(Bc), mB.mostWorkers = Math.max(mB.mostWorkers, Oc.length), void Sc(Bc, cB)
        }
        Tc.push(cB)
      }
    }

    function zB(cB, Bc, nc) {
      return new Promise(((Vc, Ic) => {
        yB({
          data: new Int8Array(cB.buffer, cB.byteOffset, cB.byteLength).slice(),
          attributeIds: Bc,
          expected: nc,
          resolve: Vc,
          reject: Ic
        })
      }))
    }
    var pc = nc(35963),
      hc = nc(35971),
      aB = nc(33044),
      lc = nc(33039);
    const Yc = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function Lc(cB) {
      const Bc = (0, lc.e)(cB.byteLength);
      if (Bc) throw new aB.k(Bc);
      const {
        json: nc,
        bin: Vc
      } = (0, aB.x)(cB), Ic = (0, lc.d)(nc, Vc);
      if (Ic) throw new aB.k(Ic);
      try {
        return function(cB, Bc) {
          var nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB, Oc, Tc, fc, mB, ec, tB;
          const Sc = new Map,
            yB = nc => {
              let Vc = Sc.get(nc);
              if (!Vc) {
                var Ic;
                const rB = cB.bufferViews[nc],
                  uc = null !== (Ic = rB.byteOffset) && void 0 !== Ic ? Ic : 0;
                Vc = {
                  index: nc,
                  bytes: Bc.subarray(uc, uc + rB.byteLength),
                  byteStride: rB.byteStride
                }, Sc.set(nc, Vc)
              }
              return Vc
            },
            zB = new Map,
            pc = Bc => {
              let nc = zB.get(Bc);
              if (!nc) {
                var Vc;
                const Ic = cB.accessors[Bc];
                nc = {
                  index: Bc,
                  count: Ic.count,
                  type: Ic.type,
                  numComponents: aB.m[Ic.type],
                  componentType: Ic.componentType,
                  normalized: null !== (Vc = Ic.normalized) && void 0 !== Vc && Vc,
                  byteOffset: Ic.byteOffset,
                  bufferView: void 0 === Ic.bufferView ? null : yB(Ic.bufferView),
                  min: Ic.min,
                  max: Ic.max
                }, zB.set(Bc, nc)
              }
              return nc
            },
            hc = null !== (nc = null === (Vc = cB.extensionsUsed) || void 0 === Vc ? void 0 : Vc.includes("KHR_draco_mesh_compression")) && void 0 !== nc && nc,
            lc = (null !== (Ic = cB.meshes) && void 0 !== Ic ? Ic : []).map(((Bc, nc) => {
              const Vc = Bc.primitives.map(((Bc, nc) => {
                var Vc, Ic, rB;
                const uc = hc ? null === (Vc = Bc.extensions) || void 0 === Vc ? void 0 : Vc.KHR_draco_mesh_compression : void 0;
                let sc = null;
                const Mc = [];
                if (uc) {
                  const nc = {
                    vertices: cB.accessors[Bc.attributes.POSITION].count,
                    indices: void 0 === Bc.indices ? 0 : cB.accessors[Bc.indices].count,
                    components: {}
                  };
                  sc = {
                    bufferView: yB(uc.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: nc
                  };
                  for (const [Vc, Ic] of aB.f) {
                    const rB = uc.attributes[Vc];
                    if (void 0 === rB) continue;
                    sc.attributeIds[Ic] = rB;
                    const Mc = Bc.attributes[Vc];
                    var Pc;
                    if (void 0 !== Mc) sc.normalized[Ic] = null !== (Pc = cB.accessors[Mc].normalized) && void 0 !== Pc && Pc, nc.components[Ic] = aB.m[cB.accessors[Mc].type]
                  }
                } else
                  for (const [cB, qB] of aB.f) {
                    const nc = Bc.attributes[cB];
                    void 0 !== nc && Mc.push({
                      semantic: cB,
                      kind: qB,
                      accessor: pc(nc)
                    })
                  }
                return {
                  index: nc,
                  mode: null !== (Ic = Bc.mode) && void 0 !== Ic ? Ic : 4,
                  attributes: Mc,
                  indices: uc || void 0 === Bc.indices ? null : pc(Bc.indices),
                  position: void 0 === Bc.attributes.POSITION ? null : pc(Bc.attributes.POSITION),
                  material: null !== (rB = Bc.material) && void 0 !== rB ? rB : null,
                  draco: sc
                }
              }));
              return {
                index: nc,
                name: Bc.name,
                primitives: Vc,
                extras: Bc.extras
              }
            })),
            Lc = (null !== (rB = cB.nodes) && void 0 !== rB ? rB : []).map(((cB, Bc) => {
              var nc, Vc;
              return {
                index: Bc,
                name: cB.name,
                children: null !== (nc = cB.children) && void 0 !== nc ? nc : [],
                mesh: null !== (Vc = cB.mesh) && void 0 !== Vc ? Vc : null,
                translation: cB.translation,
                rotation: cB.rotation,
                scale: cB.scale,
                hasCamera: void 0 !== cB.camera,
                extras: cB.extras
              }
            })),
            gB = null !== (uc = null === (sc = cB.extensionsUsed) || void 0 === sc ? void 0 : sc.includes("KHR_materials_unlit")) && void 0 !== uc && uc,
            Uc = null !== (Mc = null === (Pc = cB.extensionsUsed) || void 0 === Pc ? void 0 : Pc.includes("KHR_texture_transform")) && void 0 !== Mc && Mc,
            bB = (null !== (qB = cB.materials) && void 0 !== qB ? qB : []).map(((cB, Bc) => {
              var nc, Vc, Ic, rB;
              const uc = cB.pbrMetallicRoughness,
                sc = null === uc || void 0 === uc ? void 0 : uc.baseColorTexture;
              return {
                index: Bc,
                name: cB.name,
                extras: cB.extras,
                unlit: gB && void 0 !== (null === (nc = cB.extensions) || void 0 === nc ? void 0 : nc.KHR_materials_unlit),
                pbr: uc ? {
                  baseColorFactor: uc.baseColorFactor,
                  metallicFactor: uc.metallicFactor,
                  roughnessFactor: uc.roughnessFactor
                } : null,
                baseColorTexture: sc ? {
                  texture: sc.index,
                  transform: Uc && (null === (Vc = sc.extensions) || void 0 === Vc ? void 0 : Vc.KHR_texture_transform) || null
                } : null,
                emissiveFactor: cB.emissiveFactor,
                alphaMode: null !== (Ic = cB.alphaMode) && void 0 !== Ic ? Ic : "OPAQUE",
                alphaCutoff: cB.alphaCutoff,
                doubleSided: null !== (rB = cB.doubleSided) && void 0 !== rB && rB
              }
            })),
            Zc = (null !== (Oc = cB.textures) && void 0 !== Oc ? Oc : []).map(((Bc, nc) => {
              var Vc, Ic;
              const rB = void 0 === Bc.sampler ? Yc : {
                index: Bc.sampler,
                ...null === (Vc = cB.samplers) || void 0 === Vc ? void 0 : Vc[Bc.sampler]
              };
              return {
                index: nc,
                sampler: {
                  index: rB.index,
                  magFilter: rB.magFilter,
                  minFilter: rB.minFilter,
                  wrapS: rB.wrapS,
                  wrapT: rB.wrapT
                },
                image: null !== (Ic = Bc.source) && void 0 !== Ic ? Ic : -1
              }
            })),
            Qc = (null !== (Tc = cB.images) && void 0 !== Tc ? Tc : []).map(((cB, Bc) => ({
              index: Bc,
              name: cB.name,
              mimeType: cB.mimeType,
              bufferView: yB(cB.bufferView)
            }))),
            Cc = null !== (fc = (0, aB.u)(cB)) && void 0 !== fc ? fc : 0;
          return {
            json: cB,
            rootNodes: null !== (mB = null === (ec = cB.scenes) || void 0 === ec || null === (tB = ec[Cc]) || void 0 === tB ? void 0 : tB.nodes) && void 0 !== mB ? mB : [],
            nodes: Lc,
            meshes: lc,
            materials: bB,
            textures: Zc,
            images: Qc
          }
        }(nc, Vc)
      } catch (rB) {
        throw rB instanceof aB.i ? rB : new aB.i(`reading the GLB failed: ${rB instanceof Error?rB.message:String(rB)}`)
      }
    }
    async function gB(cB, Bc) {
      var nc, Vc;
      const Ic = cB.draco;
      if (!Ic) throw new aB.i("not a Draco primitive");
      let rB;
      try {
        rB = await Bc(Ic.bufferView.bytes, Ic.attributeIds, Ic.expected)
      } catch (Pc) {
        throw new aB.i(`Draco decoding failed: ${Pc instanceof Error?Pc.message:String(Pc)}`)
      }
      const {
        vertices: uc,
        indices: sc,
        components: Mc
      } = Ic.expected;
      if (rB.totalVertices !== uc || (null !== (nc = null === (Vc = rB.indices) || void 0 === Vc ? void 0 : Vc.length) && void 0 !== nc ? nc : 0) !== sc || rB.attributes.some((cB => cB.size !== Mc[cB.kind] || cB.data.length !== uc * cB.size))) throw new aB.i("Draco decoding gave other counts than the accessors declare");
      for (const qB of rB.attributes) {
        const cB = Ic.normalized[qB.kind];
        void 0 !== cB && (qB.normalized = cB)
      }
      return rB
    }
    const Uc = new WeakMap;

    function bB(cB, Bc) {
      var nc;
      const Vc = null !== (nc = Uc.get(cB)) && void 0 !== nc ? nc : Bc(cB);
      return Uc.set(cB, Vc), Vc
    }

    function Zc(cB) {
      const Bc = cB.bufferView,
        nc = 5125 === cB.componentType ? Uint32Array : Uint16Array,
        Vc = Bc.bytes.buffer,
        Ic = Bc.bytes.byteOffset + (cB.byteOffset || 0);
      return Ic % nc.BYTES_PER_ELEMENT !== 0 ? new nc(Vc.slice(Ic, Ic + cB.count * nc.BYTES_PER_ELEMENT), 0) : new nc(Vc, Ic, cB.count)
    }

    function Qc(cB, Bc) {
      if (cB.min && cB.max) return [new Float64Array(cB.min), new Float64Array(cB.max)];
      const nc = Bc.find((cB => {
          let {
            kind: Bc
          } = cB;
          return "position" === Bc
        })),
        Vc = nc ? (0, hc.h)(nc, cB.count) : new Float32Array(0);
      return (0, hc.s)(Vc.length / 3, ((cB, Bc) => Vc[3 * cB + Bc]))
    }

    function Cc(cB) {
      const Bc = cB.attributes.map((cB => {
          var Bc, nc;
          let {
            kind: Vc,
            accessor: Ic
          } = cB;
          const {
            bufferView: rB,
            numComponents: uc
          } = Ic;
          if (!rB) {
            return {
              kind: Vc,
              data: bB(Ic, (() => new Float32Array(uc * Ic.count))),
              offset: 0,
              stride: 4 * uc,
              components: uc,
              glType: 5126,
              isNormalized: !1
            }
          }
          const sc = null !== (Bc = rB.byteStride) && void 0 !== Bc ? Bc : uc * aB.c[Ic.componentType];
          return {
            kind: Vc,
            data: rB.bytes,
            offset: null !== (nc = Ic.byteOffset) && void 0 !== nc ? nc : 0,
            stride: sc,
            components: uc,
            glType: Ic.componentType,
            isNormalized: Ic.normalized
          }
        })),
        nc = cB.indices,
        Vc = nc && bB(nc, Zc),
        Ic = cB.position;
      return new hc.d(Bc, Vc, Ic.count, ...Qc(Ic, Bc))
    }
    const vB = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function Dc(cB, Bc) {
      const nc = Bc.attributes.map((cB => {
        let {
          kind: Bc,
          data: nc,
          size: Vc,
          byteOffset: Ic,
          byteStride: rB,
          normalized: uc
        } = cB;
        return {
          kind: Bc,
          data: nc,
          offset: Ic,
          stride: rB,
          components: Vc,
          glType: 5120 + vB.indexOf(nc.constructor),
          isNormalized: uc
        }
      }));
      return new hc.d(nc, Bc.indices, Bc.totalVertices, ...Qc(cB.position, nc))
    }

    function Nc(cB) {
      const Bc = cB.lastIndexOf("/");
      return Bc < 0 ? cB : cB.substring(Bc + 1)
    }

    function Ec(cB) {
      const Bc = cB.lastIndexOf("/");
      return Bc < 0 ? "" : cB.substring(0, Bc + 1)
    }

    function oc(cB) {
      return cB.name || `node${cB.index}`
    }
    const Wc = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      wc = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      kB = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function Xc(cB) {
      var Bc, nc, Vc, Ic;
      const rB = null !== (Bc = cB.minFilter) && void 0 !== Bc ? Bc : 9987;
      return 9729 === (null !== (nc = cB.magFilter) && void 0 !== nc ? nc : 9729) ? null !== (Vc = wc[rB]) && void 0 !== Vc ? Vc : 3 : null !== (Ic = kB[rB]) && void 0 !== Ic ? Ic : 4
    }
    const Hc = {
      33071: 0,
      33648: 2
    };

    function Fc(cB) {
      var Bc;
      return null !== (Bc = Hc[null !== cB && void 0 !== cB ? cB : 10497]) && void 0 !== Bc ? Bc : 1
    }

    function Jc(cB) {
      return 9728 === cB.minFilter || 9729 === cB.minFilter
    }

    function jB(cB) {
      var Bc, nc, Vc;
      const Ic = Float64Array.from(null !== (Bc = cB.scale) && void 0 !== Bc ? Bc : [1, 1, 1]);
      return cB.hasCamera && (Ic[0] = -1), {
        translation: Float64Array.from(null !== (nc = cB.translation) && void 0 !== nc ? nc : [0, 0, 0]),
        rotation: Float64Array.from(null !== (Vc = cB.rotation) && void 0 !== Vc ? Vc : [0, 0, 0, 1]),
        scale: Ic
      }
    }

    function Rc(cB, Bc) {
      let {
        translation: nc,
        rotation: Vc,
        scale: Ic
      } = cB;
      const rB = new Float32Array(16);
      return (0, pc.b)(Ic, 0, Vc, 0, nc, 0, rB), Bc && (0, pc.i)(rB, Bc, 0, rB), rB
    }
    class iB {
      constructor(cB, Bc, nc, Vc) {
        this.model = cB, this.decode = Bc, this.fileInfo = nc, this.uniqueRootUrl = Vc, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const Ic = new Set,
          rB = (Bc, nc) => {
            const Vc = cB.nodes[Bc];
            if (this.parents.has(Vc)) throw new aB.i(`/nodes/${Bc}: Invalid recursive node hierarchy`);
            this.parents.set(Vc, nc);
            const uc = null === Vc.mesh ? [] : cB.meshes[Vc.mesh].primitives,
              sc = uc.map((cB => {
                const Bc = uc.length > 1;
                return {
                  name: Bc ? `${oc(Vc)}_primitive${cB.index}` : oc(Vc),
                  node: Vc,
                  primitive: cB,
                  part: Bc,
                  geometry: null
                }
              }));
            this.uses.set(Vc, sc);
            const Mc = null !== Vc.mesh && Ic.has(Vc.mesh);
            Ic.add(Vc.mesh), this.own.set(Vc, Mc ? [] : sc);
            for (const cB of Vc.children) rB(cB, Vc)
          };
        for (const uc of cB.rootNodes) rB(uc, null);
        this.primitives = cB.nodes.flatMap((cB => {
          var Bc;
          return null !== (Bc = this.own.get(cB)) && void 0 !== Bc ? Bc : []
        }))
      }
      decodeGeometries() {
        const cB = new Map;
        return Promise.all(this.primitives.map((async Bc => {
          const {
            primitive: nc
          } = Bc, Vc = nc.draco;
          let Ic = Vc ? cB.get(Vc.bufferView.index) : Promise.resolve(Cc(nc));
          Ic || (Ic = gB(nc, this.decode).then((cB => Dc(nc, cB))), cB.set(Vc.bufferView.index, Ic)), Bc.geometry = await Ic
        })))
      }
      parentOf(cB) {
        var Bc;
        return null !== (Bc = this.parents.get(cB)) && void 0 !== Bc ? Bc : null
      }
      meshesUnder(cB) {
        const Bc = this.model.nodes.filter((cB => this.uses.has(cB)));
        for (const Vc of Bc) {
          const Bc = this.uses.get(Vc),
            nc = Bc.find((Bc => Bc.name === cB));
          if (nc) return 1 === Bc.length ? this.subtree(Vc) : this.own.get(Vc).includes(nc) ? [nc] : []
        }
        const nc = Bc.find((Bc => 1 !== this.uses.get(Bc).length && oc(Bc) === cB));
        return nc ? this.subtree(nc) : null
      }
      subtree(cB) {
        return [...this.own.get(cB), ...cB.children.flatMap((cB => this.subtree(this.model.nodes[cB])))]
      }
      worldMatrix(cB, Bc, nc) {
        let Vc = Rc(jB(Bc ? Wc : {}), null);
        const Ic = [];
        for (let uc = cB.part ? cB.node : this.parentOf(cB.node); uc; uc = this.parentOf(uc)) Ic.unshift(uc);
        for (const uc of Ic) Vc = Rc(jB(uc), Vc);
        const rB = jB(cB.part ? {} : cB.node);
        return void 0 !== nc && rB.scale.fill(nc), Rc(rB, Vc)
      }
      floats(cB) {
        const {
          vertexAttributes: Bc,
          vertexCount: nc
        } = cB.geometry;
        return new Map(Bc.map((cB => [cB.kind, (0, hc.h)(cB, nc)])))
      }
      imageUrl(cB) {
        return function(cB, Bc, nc) {
          let {
            name: Vc
          } = Bc;
          return `data:${cB}${Vc}#image${nc}`
        }(this.uniqueRootUrl, this.fileInfo, cB)
      }
      textureDesc(cB, Bc) {
        var nc;
        let {
          texture: Vc,
          transform: Ic
        } = cB;
        const {
          sampler: rB,
          image: uc
        } = this.model.textures[Vc], {
          bufferView: sc,
          mimeType: Mc,
          name: Pc
        } = this.model.images[uc], qB = Ic && {
          ...Ic.offset ? {
            uOffset: Ic.offset[0],
            vOffset: Ic.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...Ic.rotation ? {
            wAng: -Ic.rotation
          } : {},
          ...Ic.scale ? {
            uScale: Ic.scale[0],
            vScale: Ic.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(uc),
          noMipmap: Jc(rB),
          invertY: !1,
          samplingMode: Xc(rB),
          data: {
            bytes: sc.bytes,
            mimeType: Mc,
            label: Pc,
            context: `/textures/${Vc}`
          },
          sets: {
            wrapU: Fc(rB.wrapS),
            wrapV: Fc(rB.wrapT),
            ...qB,
            coordinatesIndex: null !== (nc = null === Ic || void 0 === Ic ? void 0 : Ic.texCoord) && void 0 !== nc ? nc : 0,
            hasAlpha: Bc
          }
        }
      }
    }
    async function Kc(cB, Bc, nc, Vc, Ic, rB) {
      let uc = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const sc = function(cB, Bc, nc) {
          return "string" !== typeof Bc ? {
            url: "",
            rootUrl: cB,
            name: nc()
          } : Bc ? Bc.startsWith("data:") ? {
            url: Bc,
            rootUrl: cB,
            name: ""
          } : cB ? {
            url: cB + Bc,
            rootUrl: cB,
            name: Bc
          } : {
            url: Bc,
            rootUrl: Ec(Bc),
            name: Nc(Bc)
          } : {
            url: cB,
            rootUrl: Ec(cB),
            name: Nc(cB)
          }
        }(nc, cB, Ic),
        Mc = {};
      Bc.addPendingData(Mc);
      try {
        const nc = Lc(await async function(cB, Bc) {
            return "string" !== typeof Bc ? Bc : cB.url.startsWith("data:") ? (0, aB.p)(cB.url) : await (0, aB.t)(cB.url)
          }(sc, cB)),
          Mc = new iB(nc, Vc, sc, function(cB, Bc) {
            let {
              rootUrl: nc,
              name: Vc
            } = cB;
            return !nc.startsWith("file:") && Vc ? nc : `${nc}${Bc()}/`
          }(sc, Ic));
        return await rB(Mc), Bc.importedMeshesFiles && (Bc.loadingPluginName = "vqc", uc && Bc.importedMeshesFiles.push(sc.url)), Mc
      } finally {
        Bc.removePendingData(Mc)
      }
    }
    var xB = nc(36092),
      dc = nc(35938),
      Ac = nc(36452);

    function Gc(cB) {
      if (null === cB || void 0 === cB || !cB.min || !cB.max) return null;
      const [Bc, nc, Vc] = cB.min, [Ic, rB, uc] = cB.max, {
        BoundingInfo: sc,
        KV: Mc
      } = (0, xB.d)();
      return new sc(new Mc(Bc, nc, Vc), new Mc(Ic, rB, uc))
    }

    function cn(cB) {
      (0, dc.d)(cB) || (cB.geometry && cB.geometry.useBoundingInfoFromGeometry ? cB._updateBoundingInfo() : cB.refreshBoundingInfo(!0, !0))
    }
    class BB {
      constructor(cB, Bc) {
        this.Ir = cB, this.decode = Bc, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(cB) {
        let Bc = this.viewData.get(cB.index);
        return Bc || (Bc = this.bufferData.then((() => cB.bytes)), this.viewData.set(cB.index, Bc)), Bc
      }
      viewBuffer(cB) {
        let Bc = this.viewBuffers.get(cB.index);
        return Bc || (Bc = this.viewBytes(cB).then((cB => new((0, xB.d)().QV)(this.Ir.RV(), cB, !1))), this.viewBuffers.set(cB.index, Bc)), Bc
      }
      vertexBuffer(cB, Bc) {
        const {
          kind: nc,
          data: Vc
        } = Bc, Ic = `${cB.index}:${nc}`;
        let rB = this.vertexBuffers.get(Ic);
        if (!rB) {
          const uc = cB.bufferView;
          rB = uc ? this.viewBuffer(uc).then((cB => this.layoutVertexBuffer(cB, Bc))) : Promise.resolve(Vc).then((cB => new((0, xB.d)().VertexBuffer)(this.Ir.RV(), cB, nc, !1))), this.vertexBuffers.set(Ic, rB)
        }
        return rB
      }
      layoutVertexBuffer(cB, Bc) {
        let {
          kind: nc,
          offset: Vc,
          stride: Ic,
          components: rB,
          glType: uc,
          isNormalized: sc
        } = Bc;
        const Mc = this.Ir.RV();
        return new((0, xB.d)().VertexBuffer)(Mc, cB, nc, !1, void 0, Ic, void 0, Vc, rB, uc, sc, !0, void 0, !0)
      }
      load(cB, Bc, nc) {
        const Vc = (0, dc.d)(nc),
          Ic = cB => {
            Vc || (nc._delayInfo = nc._delayInfo || [], -1 === nc._delayInfo.indexOf(cB) && nc._delayInfo.push(cB))
          },
          rB = Bc.draco;
        if (rB) {
          for (const cB in rB.attributeIds) Ic(cB);
          let uc = this.dracoGeometry.get(rB.bufferView.index);
          return uc || (uc = this.viewBytes(rB.bufferView).then((async () => {
            let Ic;
            try {
              Ic = await gB(Bc, this.decode)
            } catch (Mc) {
              throw new aB.i(`${cB}: ${Mc instanceof Error?Mc.message:String(Mc)}`)
            }
            const rB = Dc(Bc, Ic);
            if (Vc) return rB;
            const uc = Gc(Bc.position),
              sc = new((0, xB.d)().MirroredGeometry)(nc.name, this.Ir);
            uc && (sc._boundingInfo = uc, sc.useBoundingInfoFromGeometry = !0), rB.indexData && sc.setIndices(rB.indexData);
            for (const cB of rB.vertexAttributes) sc.setVerticesBuffer(this.layoutVertexBuffer(cB.data, cB), rB.vertexCount);
            return sc.link(rB), sc
          })), this.dracoGeometry.set(rB.bufferView.index, uc)), uc
        }
        const uc = [],
          sc = Cc(Bc);
        if (Vc) return nc.isUnIndexed = !sc.indexData, nc.hasVertexAlpha = (0, Ac.f)(Bc), Promise.resolve(sc);
        const Mc = new((0, xB.d)().MirroredGeometry)(nc.name, this.Ir),
          {
            indexData: Pc
          } = sc;
        Pc ? uc.push(this.viewBytes(Bc.indices.bufferView).then((() => {
          Mc.setIndices(Pc)
        }))) : nc.isUnIndexed = !0;
        for (const [qB, {
            kind: Oc,
            accessor: Tc
          }] of Bc.attributes.entries()) Ic(Oc), uc.push(this.vertexBuffer(Tc, sc.vertexAttributes[qB]).then((cB => {
          if ("position" === cB.getKind()) {
            const cB = Gc(Tc);
            cB && (Mc._boundingInfo = cB, Mc.useBoundingInfoFromGeometry = !0)
          }
          Mc.setVerticesBuffer(cB, sc.vertexCount)
        })));
        return (0, Ac.f)(Bc) && (nc.hasVertexAlpha = !0), Promise.all(uc).then((() => (Mc.link(sc), Mc)))
      }
    }
    var nB, VB = nc(35863),
      IB = nc(35753),
      rn = nc(36463),
      uB = nc(35801),
      sB = nc(35847),
      MB = nc(2187),
      PB = nc(35833);

    function qn(cB, Bc) {
      cB.metadata = cB.metadata || {};
      const nc = cB._internalMetadata = cB._internalMetadata || {},
        Vc = nc.vqc = nc.vqc || {};
      (Vc.pointers = Vc.pointers || []).push(Bc)
    }

    function OB(cB, Bc) {
      if (Bc && Object.keys(Bc).length > 0) {
        const nc = cB.metadata = cB.metadata || {};
        (nc.vqc = nc.vqc || {}).extras = Bc
      }
    }

    function TB(cB, Bc) {
      Bc.position = cB.translation ? IB.KV.FromArray(cB.translation) : IB.KV.Zero(), Bc.rotationQuaternion = cB.rotation ? IB.Quaternion.FromArray(cB.rotation) : IB.Quaternion.Identity(), Bc.Su = cB.scale ? IB.KV.FromArray(cB.scale) : IB.KV.One()
    }
    class fB {
      constructor(cB, Bc) {
        if (this.Ir = cB, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, Bc) {
          const Bc = cB.RV(),
            nc = cB.XBc.add((() => {
              this.dispose()
            })),
            Vc = Bc.onContextRestoredObservable.add((() => {
              for (const cB of [...this.geometries, ...this.meshes, ...this.textures]) cB._rebuild()
            }));
          this.release = () => {
            cB.XBc.remove(nc), Bc.onContextRestoredObservable.remove(Vc)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const cB of this.meshes) this.Ir.JPc(cB);
          for (const cB of this.materials) this.Ir.addMaterial(cB);
          for (const cB of this.geometries) this.Ir.addGeometry(cB);
          for (const cB of this.transformNodes) this.Ir.addTransformNode(cB);
          for (const cB of this.textures) this.Ir.addTexture(cB)
        }
      }
      dispose() {
        var cB;
        for (const Bc of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const cB of Bc.slice()) cB.dispose();
          Bc.length = 0
        }
        null === (cB = this.release) || void 0 === cB || cB.call(this), this.release = null
      }
    }
    class mn {
      constructor(cB, Bc, nc, Vc, Ic, rB, uc) {
        this.asset = cB, this.Ir = Bc, this.tree = nc, this.geometryData = Ic, this.materials = rB, this.lite = uc, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = Vc ? nc : null
      }
      create(cB) {
        if (this.lite) return cB();
        const Bc = this.Ir;
        Bc._blockEntityCollection = !!this.container;
        try {
          const Bc = cB();
          return this.container && (Bc._parentContainer = this.container), Bc
        } finally {
          Bc._blockEntityCollection = !1
        }
      }
      node(cB, Bc) {
        return this.create((() => this.lite ? Bc ? (0, rn.g)(this.lite, cB) : (0, rn.s)(this.lite, cB) : Bc ? new((0, xB.d)().Mesh)(cB, this.Ir) : new((0, xB.d)().TransformNode)(cB, this.Ir)))
      }
      async load() {
        var cB;
        this.asset.model.json.nodes && this.createRoot();
        const Bc = this.lite ? null : this.Ir,
          nc = null !== (cB = null === Bc || void 0 === Bc ? void 0 : Bc.blockMaterialDirtyMechanism) && void 0 !== cB && cB;
        let Vc;
        Bc && (Bc.blockMaterialDirtyMechanism = !0);
        try {
          Vc = this.loadScene()
        } finally {
          null === Bc || void 0 === Bc || Bc._forceBlockMaterialDirtyMechanism(nc)
        }
        await Vc;
        const {
          root: Ic,
          tree: rB
        } = this;
        Ic && (Ic.jnc(!0), rB.meshes.push(Ic), rB.rootNodes.push(Ic));
        for (const sc of this.asset.model.nodes) {
          const cB = this.nodeObjects.get(sc.index);
          cB && ["TransformNode", "LiteNode"].includes(cB.getClassName()) && rB.transformNodes.push(cB);
          for (const Bc of null !== (uc = this.nodePrimitives.get(sc.index)) && void 0 !== uc ? uc : []) {
            var uc;
            rB.meshes.push(Bc);
            const cB = Bc.geometry;
            cB && !rB.geometries.includes(cB) && rB.geometries.push(cB)
          }
        }
      }
      createRoot() {
        const cB = this.node("__root__", !0);
        this.root = cB, cB.jnc(!1), this.Ir.useRightHandedSystem || TB(Wc, cB)
      }
      loadScene() {
        const cB = [];
        for (const Bc of this.asset.model.rootNodes) cB.push(this.loadNode(this.asset.model.nodes[Bc], (cB => {
          cB.parent = this.root
        })));
        return cB.push(Promise.resolve()), Promise.all(cB).then((() => {}))
      }
      loadNode(cB, Bc) {
        const nc = `/nodes/${cB.index}`,
          Vc = [],
          Ic = Ic => {
            if (qn(Ic, nc), TB(cB, Ic), cB.hasCamera && !this.Ir.useRightHandedSystem) {
              const {
                Su: cB
              } = Ic;
              cB.set(-1, cB.y, cB.z)
            }
            for (const Bc of cB.children) Vc.push(this.loadNode(this.asset.model.nodes[Bc], (cB => {
              cB.parent = Ic
            })));
            (nc => {
              OB(nc, cB.extras), Bc(nc)
            })(Ic)
          };
        if (null === cB.mesh) {
          const Bc = this.node(oc(cB), !1);
          this.nodeObjects.set(cB.index, Bc), Ic(Bc)
        } else {
          const Bc = this.asset.model.meshes[cB.mesh];
          Vc.push(this.loadMesh(`/meshes/${Bc.index}`, cB, Bc, Ic))
        }
        return Promise.all(Vc).then((() => {
          for (const nc of null !== (Bc = this.nodePrimitives.get(cB.index)) && void 0 !== Bc ? Bc : []) {
            var Bc;
            cn(nc)
          }
          return this.nodeObjects.get(cB.index)
        }))
      }
      loadMesh(cB, Bc, nc, Vc) {
        const Ic = [],
          rB = oc(Bc);
        if (1 === nc.primitives.length) {
          const Vc = nc.primitives[0];
          Ic.push(this.loadPrimitive(`${cB}/primitives/${Vc.index}`, rB, Vc, (cB => {
            this.nodeObjects.set(Bc.index, cB), this.nodePrimitives.set(Bc.index, [cB])
          })))
        } else {
          const Vc = this.node(rB, !1);
          this.nodeObjects.set(Bc.index, Vc);
          const uc = [];
          this.nodePrimitives.set(Bc.index, uc);
          for (const Bc of nc.primitives) Ic.push(this.loadPrimitive(`${cB}/primitives/${Bc.index}`, `${rB}_primitive${Bc.index}`, Bc, (cB => {
            cB.parent = Vc, uc.push(cB)
          })))
        }
        const uc = this.nodeObjects.get(Bc.index);
        return Vc(uc), Promise.all(Ic).then((() => uc))
      }
      loadPrimitive(cB, Bc, nc, Vc) {
        const Ic = [],
          rB = this.node(Bc, !0);
        if (rB.sideOrientation = this.Ir.useRightHandedSystem ? uB.e.CounterClockWiseSideOrientation : uB.e.ClockWiseSideOrientation, Ic.push(this.geometryData.load(cB, nc, rB).then((cB => {
            if ((0, dc.d)(rB)) {
              var Bc, nc;
              const Vc = cB;
              rB.replaceModel(Vc, Int32Array.of(0, null !== (Bc = null === (nc = Vc.indexData) || void 0 === nc ? void 0 : nc.length) && void 0 !== Bc ? Bc : Vc.vertexCount, 0, Vc.vertexCount))
            } else this.create((() => (cB.applyToMesh(rB), cB)))
          }))), this.materials) {
          const cB = 0 === nc.mode ? uB.e.PointListDrawMode : uB.e.TriangleFillMode,
            Bc = null === nc.material ? null : this.asset.model.materials[nc.material];
          Ic.push(this.loadMaterial(Bc, cB, (cB => {
            rB.material = cB
          })))
        }
        return qn(rB, cB), Vc(rB), Promise.all(Ic).then((() => rB))
      }
      loadMaterial(cB, Bc, nc) {
        var Vc;
        const Ic = `${null!==(Vc=null===cB||void 0===cB?void 0:cB.index)&&void 0!==Vc?Vc:"default"}:${Bc}`;
        let rB = this.materialData.get(Ic);
        return rB || (rB = this.createMaterial(cB, Bc), this.materialData.set(Ic, rB)), nc(rB.material), rB.promise
      }
      createMaterial(cB, Bc) {
        const nc = cB ? cB.name || `material${cB.index}` : "__GLTFLoader._default",
          {
            style: Vc,
            unlit: Ic
          } = this.materials;
        let rB;
        const uc = this.create((() => {
          const uc = (0, PB.b)({
            name: nc,
            Ir: this.Ir,
            sets: {
              ...(0, Ac.e)(this.asset, cB, Vc, Ic),
              fillMode: Bc
            },
            unrendered: !0
          });
          return rB = uc.model, uc.mirror
        }));
        let sc = Promise.resolve();
        if (cB) {
          const Bc = `/materials/${cB.index}`,
            Vc = rB.diffuseTexture;
          if (Vc && !Vc.mirror) sc = new Promise((cB => setTimeout(cB)));
          else if (Vc) {
            const Ic = Vc.mirror;
            Ic._parentContainer = this.container, Ic.name = `${nc} (Base Color)`, qn(Ic, `${Bc}${cB.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(Ic), sc = (0, sB.v)(Vc)
          }
          OB(uc, cB.extras), qn(uc, Bc)
        }
        return this.tree.materials.push(uc), {
          material: uc,
          promise: sc
        }
      }
    }

    function eB() {
      VB.e.dracoDecodes = mB.decodes, VB.e.dracoWorkersStarted = mB.workersStarted, VB.e.dracoMostWorkers = mB.mostWorkers
    }
    async function tn(cB, Bc, nc, Ic, rB) {
      try {
        return await async function(cB, Bc, nc, Ic, rB, uc) {
          var sc;
          let Mc;
          const Pc = null === (sc = (0, MB.g)()) || void 0 === sc ? void 0 : sc.tr,
            qB = null !== Pc && void 0 !== Pc && Pc.SI && Bc === Pc.knc() ? Pc : null,
            Oc = rB && !qB;
          return await Kc(cB, Bc, nc, Ic, Vc.d, (cB => (Mc = new fB(Bc, Oc), new mn(cB, Bc, Mc, Oc, new BB(Bc, Ic), uc, qB).load())), !rB), Mc
        }(cB, Bc, nc, zB, Ic, rB)
      } finally {
        eB()
      }
    }
    async function SB(cB, Bc, nc, Ic) {
      try {
        return await Kc(cB, Bc, nc, zB, Vc.d, (cB => Ic(cB, new BB(Bc, zB))))
      } finally {
        eB()
      }
    }
    nB = Ic.e, Pc || (Pc = {
      scriptUrl: new URL(nB.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(nB.wasmBinaryUrl, location.href).href
    })
  },
  39457: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(145),
      Ic = nc(1070);

    function rB(cB) {
      return (0, Vc.c)() ? `https://${Ic.d.discordDomain}/${cB.href}` : cB.href
    }
    const uc = {
      scriptUrl: rB(new nc.U(nc(39462))),
      wasmBinaryUrl: rB(new nc.U(nc(39468)))
    }
  },
  35009: cB => {
    cB.exports = function(cB, Bc, nc, Vc) {
      var Ic = self || window;
      try {
        try {
          var rB;
          try {
            rB = new Ic.Blob([cB])
          } catch (Pc) {
            (rB = new(Ic.BlobBuilder || Ic.WebKitBlobBuilder || Ic.MozBlobBuilder || Ic.MSBlobBuilder)).append(cB), rB = rB.getBlob()
          }
          var uc = Ic.URL || Ic.webkitURL,
            sc = uc.createObjectURL(rB),
            Mc = new Ic[Bc](sc, nc);
          return uc.revokeObjectURL(sc), Mc
        } catch (Pc) {
          return new Ic[Bc]("data:application/javascript,".concat(encodeURIComponent(cB)), nc)
        }
      } catch (Pc) {
        if (!Vc) throw Error("Inline worker is not supported");
        return new Ic[Bc](Vc, nc)
      }
    }
  },
  39468: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  39462: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);